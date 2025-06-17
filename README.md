
# 📘 Protected Page App (React + MUI + TailwindCSS)

This project demonstrates a **Protected Route Application** using **React Router**, **Material-UI**, **TailwindCSS**, and **localStorage-based auth simulation**. It features a clean UI, secure routing, persistent session behavior, and active page highlights.

---

## ✨ Features

- 🔐 **Login Authentication (Mock)**
- 🚫 **Protected Routes** (`/page/:number`)
- 🚪 **Public Routes** (like `/login`)
- 💾 **Last Visited Page Redirect After Login**
- 🎨 **Material UI + TailwindCSS Hybrid UI**
- 🧭 **Pagination Buttons with Active/Inactive States**
- 🎯 **Route Guards using React Router v6**

---

## 📁 Folder Structure

```
src/
│
├── components/
│   └── Header.jsx          # AppBar with Logout + Page buttons
│
├── pages/
│   ├── Login.jsx           # Login form (admin/password)
│   ├── PageX.jsx           # Protected page component
│   └── DynamicPage.jsx     # Renders PageX with URL param
│
├── routes/
│   ├── ProtectedRoute.jsx  # Guards protected pages
│   └── PublicRoute.jsx     # Guards public pages (like login)
│
├── utils.js                # Auth helpers: isLoggedIn, getLastPage
└── App.js                  # Main route configuration
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/protected-page-app.git
cd protected-page-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npm start
```

App will be available at: `http://localhost:3000`

---

## 🔑 Demo Credentials

Use the following credentials to log in:

| Field    | Value     |
|----------|-----------|
| Username | `admin`   |
| Password | `password`|

---

## 🛡️ Route Behavior

- `/login` → Public route. Redirects to last page if already logged in.
- `/page/:number` → Protected route. Requires login.
- On login success → Redirects to last visited protected page.
- On logout → Clears session and navigates to `/login`.

---

## 📦 Dependencies

- React
- React Router DOM
- @mui/material
- TailwindCSS
- Lucide React (icons)

---

## 📌 Customization Tips

- Update `Login.jsx` to connect to real auth logic.
- Style with more consistent Tailwind or MUI based on preference.
- Add backend auth/session logic for production.

---

## 📄 License

MIT — free to use and modify.
