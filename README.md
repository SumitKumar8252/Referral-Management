# 🚀 Candidate Referral Management System

## 🔐 Login Page
![Login Page](/Frontend/src/assets/Login.png)

## 📈 Metrics Dashboard
![Metrics](/Frontend/src/assets/dashboard.png)

## 📌 Overview

The **Candidate Referral Management System** is a full-stack web application built to simulate part of Worko's functionality.  
It allows users to refer candidates, track their status, and manage referrals efficiently.

This project demonstrates:

- Full-stack development (React + Node.js)
- REST API integration
- Authentication with JWT
- State management using React Hooks
- File uploads with validation
- Clean UI/UX design

---

# 🛠 Tech Stack

## Frontend
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS

## Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- JWT Authentication
- Multer (File Upload)
- CORS

---

# ✨ Features Implemented

## 🔐 Authentication (Bonus Feature)
- User Registration
- User Login
- JWT-based authentication
- Protected Routes

---

## 📊 Dashboard
- Displays list of referred candidates
- Search functionality (by job title or status)
- Responsive UI
- Status update dropdown

---

## 📝 Referral Form
- Candidate Name
- Email (validated)
- Phone Number (validated)
- Job Title
- Resume Upload (PDF only)
- Form submission via POST request

---

## 📈 Metrics Dashboard (Bonus Feature)
- Total candidates referred
- Candidates by status:
  - Pending
  - Reviewed
  - Hired
- Hiring and review rate calculation

---

## 🗂 Backend API Endpoints

### 🔐 Auth Routes
POST /api/auth/register
POST /api/auth/login


### 👨‍💼 Candidate Routes
POST /api/candidates
GET /api/candidates
PUT /api/candidates/:id/status
DELETE /api/candidates/:id (optional)


---


# 🎯 Conclusion

This project demonstrates the ability to:

- Build RESTful APIs
- Integrate frontend with backend
- Handle authentication securely
- Manage application state effectively
- Implement validation and error handling
- Deploy full-stack applications

---