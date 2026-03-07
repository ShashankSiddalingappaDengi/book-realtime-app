import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [connected, setConnected] = useState(false);

  useEffect(() => {

    axios.get("http://localhost:5000/books")
      .then(res => setBooks(res.data));

    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));

    socket.on("bookAdded", (book) => {
      setBooks(prev => [...prev, book]);
    });

    socket.on("bookUpdated", (updatedBook) => {
      setBooks(prev =>
        prev.map(b => b.id === updatedBook.id ? updatedBook : b)
      );
    });

    socket.on("bookDeleted", (id) => {
      setBooks(prev => prev.filter(book => book.id !== id));
    });

    return () => {
      socket.off("bookAdded");
      socket.off("bookUpdated");
      socket.off("bookDeleted");
    };

  }, []);

  const addBook = async () => {

    if (!title || !author) return;

    await axios.post("http://localhost:5000/books", {
      title,
      author
    });

    setTitle("");
    setAuthor("");
  };

  const editBook = async (book) => {

    const newTitle = prompt("Edit title", book.title);

    if (!newTitle) return;

    await axios.put(`http://localhost:5000/books/${book.id}`, {
      title: newTitle,
      author: book.author
    });
  };

  const deleteBook = async (id) => {

    await axios.delete(`http://localhost:5000/books/${id}`);
  };

  return (

    <div className="container">

      <h1>📚 Real-Time Book Manager</h1>

      <p className={connected ? "online" : "offline"}>
        {connected ? "Connected to server" : "Disconnected"}
      </p>

      <div className="form">

        <input
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button onClick={addBook}>
          Add Book
        </button>

      </div>

      <hr />

      <h2>Books</h2>

      {books.map(book => (

        <div key={book.id} className="book">

          <span>
            {book.title} — {book.author}
          </span>

          <div className="actions">

            <span
              className="edit"
              onClick={() => editBook(book)}
            >
              ✏️
            </span>

            <span
              className="delete"
              onClick={() => deleteBook(book.id)}
            >
              🗑️
            </span>

          </div>

        </div>

      ))}

    </div>
  );
}

export default App;