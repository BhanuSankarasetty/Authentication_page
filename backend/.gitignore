# Authentication Page Project

A modern **authentication system** built using **Node.js**, **Express**, and **React**. This project includes a secure login page, error handling, password visibility toggle, and state management with React Hooks. It serves as a foundation for any web application requiring user authentication. It provides secure user login functionality with JWT-based authentication and protected routes in the frontend.

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [License](#license)

## Project Structure

```
nodeAndExpress/
├── backend/
│   ├── index.js
│   ├── lib/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── routes/
└── frontend/
    ├── index.html
    ├── src/
    ├── public/
    ├── node_modules/
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── eslint.config.js
    └── README.md

```
## Features

- **User Login:** Users can log in using their email and password.
- **JWT Authentication:** Backend generates a JWT token upon successful login.
- **Protected Routes:** Certain routes (like `/` home) are accessible only if the user is logged in.
- **Error Handling:** Displays meaningful error messages for incorrect password or non-existent accounts.
- **Show/Hide Password:** Users can toggle password visibility on the login page.
- **Frontend Routing:** Uses React Router for navigation between login, register, and home pages.
- **Responsive UI:** Built with Tailwind CSS for a modern and responsive interface.

## Technologies Used

- **Frontend**:
  - React.js + Vite
  - Tailwind CSS
  - React Router DOM
  - Axios
- **Backend**:
  - Node.js
  - Express.js
  - JWT for authentication
  - Body-parser & CORS

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd nodeAndExpress
```
## Backend Setup

```
cd backend
npm install
npm start
```

- Backend runs on: http://localhost:3000

## Frontend Setup

```
cd frontend
npm install
npm run dev
```


- Frontend runs on: http://localhost:5173 (default Vite port)

## API Endpoints

Method	Endpoint	Description
POST	/auth/login	Login with email & password
POST	/auth/register	Register a new user
GET 	/home	    Protected home route



- Login Request Example:
```
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```


- Login Response Example:

```
{
  "token": "<JWT_TOKEN>"
}
```


## Future Improvements

- Add register page and email verification

- Implement forgot password functionality

- Add role-based access control

- Add unit and integration tests