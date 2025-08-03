# Fundraising Intern Portal

This is a Full Stack Web Application for managing fundraising interns. It contains a dummy login/signup, a dashboard showing intern data, and a static rewards section.

## 🔧 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: Static JSON / Dummy Data (No real DB

## 🚀 Features

### 🔐 Authentication (Dummy)

- Signup using Name, Email, and Password
- Login with just Name (as per requirements)
- Dummy authentication only

### 📊 Dashboard

- Intern Name
- Referral Code (dummy - `yourname2025`)
- Amount Raised (static or from mock backend)
- Rewards section (static images or text)

## 🔗 Routes Overview

### Backend (Express)

- `POST /api/auth/signup` - create new user (dummy logic)
- `POST /api/auth/login` - login with name only
- `GET /api/dashboard/:name` - fetch dummy user data

### Frontend (React)

- `/signup` - Signup page
- `/login` - Login page
- `/dashboard` - Dashboard after login

## 🛠 Installation (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/Shivam-kr-00/Intern-portal
```

### 2. Setup Backend

```bash
npm install
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 API Sample (for Signup)

http://localhost:5000/api/auth/signup

```
POST /api/auth/signup
{
  "name": "shivam",
  "email": "shivam@gmail.com",
  "password": "1234"
}
```

## IMAGE

D:\Intern-Portal\frontend\assets\sign-postman.png.png
D:\Intern-Portal\frontend\assets\signup-postman.png.png

---

## 👨‍💻 Author

- Shivam Kumar

---

## 📌 Note

This project is built only for demo/internship submission. No real authentication or database connection is involved.
