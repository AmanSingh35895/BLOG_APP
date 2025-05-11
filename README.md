# Blog Application

A full-stack blog application built with React.js and Node.js.

## Project Structure

```
blog-app-1/
├── client/          # React frontend
└── server/          # Node.js backend
```

## Tech Stack

### Frontend

- React.js with Vite
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls
- Context API for state management

### Backend

- Node.js & Express.js
- MySQL for database
- JWT for authentication
- bcrypt for password hashing

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

Note: The frontend is configured to proxy API requests to the backend server at http://localhost:8800

## Features

### Authentication

- User registration with username, email, and password
- Secure login with JWT tokens
- Cookie-based authentication
- Logout functionality

### Blog Posts

- View all blog posts on homepage
- Posts display with title, description, and image
- Category-based navigation
- Responsive post layout

### UI Features

- Responsive design with Tailwind CSS
- Clean and modern interface
- Category navigation in header
- Protected routes for authenticated users
- Write post button for creating new content
