\# Real-Time Book Manager



A full-stack web application that provides real-time updates for managing a list of books.  

Users can add, edit, and delete books, and all connected clients receive updates instantly without refreshing the page.



\## Tech Stack



Frontend

\- React

\- Axios

\- Socket.io Client

\- CSS



Backend

\- Node.js

\- Express.js

\- Socket.io



\## Features



\- Add books

\- Edit books

\- Delete books

\- Real-time updates using WebSockets

\- Multi-client synchronization

\- Modern UI



\## Project Structure

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



\## How It Works



The frontend communicates with the backend using REST APIs for CRUD operations.  

Socket.io is used for real-time communication between the server and all connected clients.



When a book is added, updated, or deleted:

1\. The backend updates the data.

2\. The backend emits a WebSocket event.

3\. All connected clients receive the event.

4\. The UI updates automatically.



\## Running the Project Locally



\### 1. Clone the repository

git clone https://github.com/ShashankSiddalingappaDengi/book-realtime-app.git





\### 2. Start Backend





cd backend

npm install

node server.js





Backend runs on:





http://localhost:5000





\### 3. Start Frontend



Open another terminal:





cd frontend

npm install

npm start





Frontend runs on:





http://localhost:3000





\## Testing Real-Time Updates



1\. Open the application in two browser tabs.

2\. Add or edit a book in one tab.

3\. The second tab will update automatically without refreshing.



\## Deployment Plan



The backend can be deployed on platforms such as AWS EC2, Render, or Railway.  

The frontend can be deployed using Vercel or Netlify.



Socket.io will maintain real-time communication between the frontend and backend servers.



\## Future Improvements



\- Add user authentication

\- Integrate a database such as MongoDB or PostgreSQL

\- Implement search functionality

\- Improve UI components

