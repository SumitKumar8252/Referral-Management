# 🚀 Candidate Referral Management System - Backend

This is the **Backend API** for the Candidate Referral Management System built using:

- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication
- Multer (PDF Upload)

It provides secure APIs for managing candidate referrals.

---

## 🛠 Tech Stack

- Node.js (ES Modules)
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcryptjs (Password hashing)
- Multer (File Upload)
- Validator (Email & Phone validation)

---

## 📂 Project Structure

🔥 Ye professional backend README.md hai — clean structure, GitHub-ready, interview-grade documentation.

Tum ise backend/README.md me directly paste kar sakte ho.

📁 backend/README.md
# 🚀 Candidate Referral Management System - Backend

This is the **Backend API** for the Candidate Referral Management System built using:

- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication
- Multer (PDF Upload)

It provides secure APIs for managing candidate referrals.

---

## 🛠 Tech Stack

- Node.js (ES Modules)
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcryptjs (Password hashing)
- Multer (File Upload)
- Validator (Email & Phone validation)

---

## 📂 Project Structure



backend/
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── authController.js
│ └── candidateController.js
│
├── middleware/
│ ├── auth.js
│ └── upload.js
│
├── models/
│ ├── User.js
│ └── Candidate.js
│
├── routes/
│ ├── authRoutes.js
│ └── candidateRoutes.js
│
├── .env
├── server.js
└── package.json


---

## 🔐 Features Implemented

### ✅ Authentication
- Register User
- Login User
- JWT Token Generation
- Protected Routes

### ✅ Candidate Management
- Create Candidate
- Get All Candidates
- Update Candidate Status
- Delete Candidate

### ✅ Resume Upload
- Accepts PDF files only
- Max size: 5MB
- Stored locally in `/uploads` folder

### ✅ Validation
- Email validation
- Phone number validation
- JWT verification middleware

---

## 🌍 Environment Variables

Create a `.env` file inside backend folder:



PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/myDataBase_Name
JWT_SECRET=supersecretkey
(to generate :  openssl rand -base64 32)


⚠️ Never commit `.env` file to GitHub.

---

### Start development server

npm run dev


Server will run at:

http://localhost:5000


---

## 📡 API Endpoints

### 🔑 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |

---

### 👤 Candidates

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/candidates` | Create new candidate |
| GET | `/api/candidates` | Get all candidates |
| PUT | `/api/candidates/:id/status` | Update candidate status |
| DELETE | `/api/candidates/:id` | Delete candidate |

---

## 🔒 Protected Routes

These routes require JWT token in header:

Authorization: Bearer <token>


Protected endpoints:

- Create Candidate
- Get Candidates
- Update Status
- Delete Candidate

---

## 📤 Resume Upload

- Field name: `resume`
- Accepts: `.pdf`
- Max size: 5MB
- Stored in: `/uploads`

---

## 🧪 Testing API

You can test APIs using:

- Postman

---

## 🧠 Assumptions

- MongoDB is running locally
- Frontend runs on port 5173
- Backend runs on port 5000

---
