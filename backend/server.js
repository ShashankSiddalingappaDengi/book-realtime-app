const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

const DATA_FILE = "./books.json";

/* Read books */

function readBooks() {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
}

/* Save books */

function saveBooks(books) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2));
}

/* Get all books */

app.get("/books", (req, res) => {
  const books = readBooks();
  res.json(books);
});

/* Add book */

app.post("/books", (req, res) => {

  const books = readBooks();

  const book = {
    id: Date.now(),
    title: req.body.title,
    author: req.body.author
  };

  books.push(book);
  saveBooks(books);

  io.emit("bookAdded", book);

  res.json(book);
});

/* Update book */

app.put("/books/:id", (req, res) => {

  const books = readBooks();
  const id = parseInt(req.params.id);

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).send("Book not found");
  }

  book.title = req.body.title;
  book.author = req.body.author;

  saveBooks(books);

  io.emit("bookUpdated", book);

  res.json(book);
});

/* Delete book */

app.delete("/books/:id", (req, res) => {

  let books = readBooks();
  const id = parseInt(req.params.id);

  books = books.filter(book => book.id !== id);

  saveBooks(books);

  io.emit("bookDeleted", id);

  res.send("Book deleted");
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});