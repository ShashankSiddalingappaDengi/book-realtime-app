\# 📚 Real-Time Book Manager



A \*\*full-stack web application\*\* that provides \*\*real-time updates\*\* for managing a list of books.



Users can \*\*add, edit, and delete books\*\*, and all connected clients receive updates instantly \*\*without refreshing the page\*\* using WebSockets.



---



\# 🚀 Tech Stack



\## Frontend

\- React

\- Axios

\- Socket.io Client

\- CSS



\## Backend

\- Node.js

\- Express.js

\- Socket.io



---



\# ✨ Features



\- ➕ Add books

\- ✏️ Edit books

\- 🗑️ Delete books

\- ⚡ Real-time updates across multiple clients

\- 🔄 No page refresh required

\- 🎨 Modern UI



---



\# 📂 Project Structure





book-realtime-app

│

├── backend

│ ├── server.js

│ ├── package.json

│ ├── package-lock.json

│ └── books.json

│

├── frontend

│ ├── src

│ ├── public

│ ├── package.json

│ └── package-lock.json

│

└── README.md





---



\# ⚙️ How It Works



The application uses \*\*REST APIs + WebSockets\*\*.



1\. User performs an action (Add/Edit/Delete book)

2\. Frontend sends request to backend API

3\. Backend updates data

4\. Backend emits a \*\*Socket.io event\*\*

5\. All connected clients receive the event

6\. UI updates automatically



This enables \*\*real-time synchronization across multiple users\*\*.



---



\# 🖥️ Running the Project Locally



\## 1️⃣ Clone the repository





git clone https://github.com/ShashankSiddalingappaDengi/book-realtime-app.git





---



\## 2️⃣ Start Backend





cd backend

npm install

node server.js





Backend runs on:





http://localhost:5000





---



\## 3️⃣ Start Frontend



Open a new terminal:





cd frontend

npm install

npm start





Frontend runs on:





http://localhost:3000





---



\# 🧪 Testing Real-Time Updates



1\. Open the application in \*\*two browser tabs\*\*

2\. Add or edit a book in one tab

3\. The second tab will update \*\*instantly without refreshing\*\*



---



\# ☁️ Deployment Plan



The application can be deployed using:



Backend

\- AWS EC2

\- Render

\- Railway



Frontend

\- Vercel

\- Netlify



Socket.io will handle \*\*real-time communication between frontend and backend\*\*.



---



\# 🔮 Future Improvements



\- Add authentication

\- Connect to database (MongoDB / PostgreSQL)

\- Add search and filtering

\- Improve UI components

\- Add pagination

