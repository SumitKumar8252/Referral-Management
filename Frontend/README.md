# 🚀 Candidate Referral Management System - Frontend

This is the **Frontend Application** for the Candidate Referral Management System built using **React (Vite) + Tailwind CSS**.

It allows users to:

- Register & Login (JWT Authentication)
- Refer candidates
- View all referred candidates
- Search & filter candidates
- Update candidate status
- View metrics dashboard

---

## 🛠 Tech Stack

- React 18
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Context API (Authentication)

---

## 📂 Project Structure

src/
│
├── App.jsx
│
├── components/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── Dashboard/
│   │   └── Dashboard.jsx
│   │
│   ├── CandidateCard/
│   │   └── CandidateCard.jsx
│   │
│   ├── ReferralForm/
│   │   └── ReferralForm.jsx
│   │
│   ├── MetricsDashboard/
│   │   └── MetricsDashboard.jsx
│   │
│   ├── Navbar/
│   │   └── Navbar.jsx
│   │
│   └── ProtectedRoute.jsx
│
├── context/
│ ├── AuthContext.jsx
│ └── AuthProvider.jsx
│
├── hooks/
│ └── useCandidates.js
│
└── services/
└── candidateService.js


---

## 🔐 Authentication Flow

- User logs in → JWT token received
- Token stored in `localStorage`
- Axios interceptor automatically attaches token to every request
- Protected routes prevent unauthorized access

---

## 📊 Features Implemented

### ✅ Authentication
- Register
- Login
- Logout
- Protected Routes

### ✅ Dashboard
- Fetch all candidates
- Search by job title or status
- Dynamic UI rendering

### ✅ Referral Form
- Submit new candidate
- Upload resume (PDF only)
- Validation + loading states

### ✅ Update Candidate Status
- Change status: Pending → Reviewed → Hired

### ✅ Metrics Dashboard
- Total candidates
- Pending count
- Reviewed count
- Hired count

---

## 🌍 Environment Variables

Create a `.env` file in the root of the frontend folder:



VITE_API_URL=http://localhost:5000/api


⚠️ Restart server after modifying `.env`.

---

## ⚙️ Installation & Setup

### 1️⃣ Navigate to frontend directory



cd frontend


### 2️⃣ Install dependencies



npm install


### 3️⃣ Start development server



npm run dev


App will run at:



http://localhost:5173


---

## 📦 Available Scripts



npm run dev # Start development server
npm run build # Build production bundle
npm run preview # Preview production build


---

## 🧠 Assumptions

- Backend server is running on `http://localhost:5000`
- JWT authentication is enabled on backend
- Resume upload is handled by backend API
- MongoDB database is connected

---

## 🚀 Production Build

- To create optimized production build:


- npm run build


- Preview production build:


- npm run preview





