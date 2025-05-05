# Blog Application

A full-stack blog application built with React.js and Node.js.

## Project Structure

```
blog-app-1/
├── client/          # React frontend
└── server/          # Node.js backend
```

## Prerequisites

- Node.js (v16 or higher)
- MySQL
- npm or yarn

## Getting Started

### Clone the repository

```bash
git clone <your-repo-url>
cd blog-app-1
```

### Setting up the Backend

1. Navigate to server directory:

```bash
cd server
npm install
```

2. Configure MySQL database:

- Create a database named `blog_app`
- Update database credentials in `src/db.js` if needed
- Run the SQL script in `src/app.sql`

3. Start the server:

```bash
npm start
```

Server will run on http://localhost:8800

### Setting up the Frontend

1. Navigate to client directory:

```bash
cd client
npm install
```

2. Start the development server:

```bash
npm run dev
```

Client will run on http://localhost:5173

## Features

- User authentication
- Blog post creation and management
- Responsive design
- Category-based post filtering
