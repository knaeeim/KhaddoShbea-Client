# 🍽️ Food Donation Platform

## 🔗 Live Project

[👉 Visit Live Site](https://assignment-11-e46ad.web.app/)

---

## 🎯 Project Summary

This is a **complete full-stack food donation platform** that connects food donors and requesters. The project provides a smooth user experience, efficient food management system, and secure private routes. The goal is to help reduce food waste and promote sharing through a modern, responsive, and recruiter-friendly web application.

---

## 💡 Purpose of the Project

This platform was built as part of an assignment challenge to demonstrate real-world full-stack web development skills. It integrates **authentication, route protection, CRUD operations, JWT security**, and more — while also maintaining high UI/UX standards.

---

## 🛠️ Core Features

- 🔐 **Secure Authentication** (Email/Password + Google)
- 📦 **Add & Manage Donated Foods** (private)
- 🔍 **Search & Sorting** by food name and expire date
- 💬 **Food Request System** with modal form and status change
- 🌐 **JWT-Protected Private Routes**
- 🎨 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Framer Motion & Lottie** animations for smooth user experience
- 🔄 **Layout Toggle** (2-column & 3-column switch in Available Foods)
- 📊 **TanStack Query** for API data handling and mutations
- ✅ **Secure Env Variables** for Firebase & MongoDB

---

## 🧱 Tech Stack

- **Frontend**: React, Vite, TailwindCSS, DaisyUI
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: Firebase (Email/Password + Google)
- **API Management**: Axios with JWT token integration
- **Animation**: GSAP, Lottie, Framer Motion
- **UI Components**: SweetAlert2, React Icons, Swiper, Datepicker

---

## 📦 NPM Packages Used

| Category | Packages |
|---------|----------|
| Core Frameworks | `react`, `vite`, `react-router`, `tailwindcss` |
| State & API | `@tanstack/react-query`, `axios` |
| Animations | `gsap`, `lottie-react`, `motion` |
| Auth | `firebase` |
| UI | `daisyui`, `react-icons`, `swiper`, `sweetalert2`, `react-hot-toast`, `react-datepicker`, `react-countup` |
| Dev Tools | `eslint`, `@vitejs/plugin-react`, `@eslint/js` |

---

## 📋 Authentication Flow

- 🔐 **Login Page**: Email, password, and Google login. Redirects unauthorized users when trying to access private routes.
- 📝 **Register Page**: Validates strong passwords, shows appropriate error messages using toast/SweetAlert.
- 🔁 **JWT Token**: Issued upon login and used to secure backend API routes.

---

## 📄 Page Overview

### 🌟 Home
- Banner section
- Featured Foods (Top 6)
- Two additional promotional sections
- Framer Motion integration

### 🍲 Available Foods
- Grid view (3-column / 2-column toggle)
- Search by name
- Sort by expire date
- View Details button redirects to food details page

### 📝 Add Food *(Private)*
- Form with all required fields
- Adds food to “Available Foods”

### 🧾 Food Details
- Displays full info
- Request Button triggers modal
- On submit, food moves to requested list and updates status

### ⚙️ Manage My Foods *(Private)*
- Table view of user's added foods
- Update/Delete functionalities

### 📌 My Food Requests *(Private)*
- Displays user’s food requests with pickup and expire details

---

## 🛡️ Security

- Firebase keys and MongoDB credentials are securely stored in environment variables
- JWT authentication is implemented for all private routes and API interactions
- Custom AxiosSecure hook for protected API requests

---

## ✅ Project Standards Checklist

- ✔️ 15+ client-side commits with clear messages
- ✔️ 8+ server-side commits with meaningful changes
- ✔️ Firebase domain authorized
- ✔️ No CORS / 404 / 504 errors in production
- ✔️ Reloading does not redirect private users to login
- ✔️ Fully mobile-responsive and clean, professional layout
- ❌ No “gobindo” design — clean, structured and recruiter-friendly UI

---

## 🚀 Bonus Features

- ✅ Custom Axios Secure Hook
- ✅ Layout Toggle Feature
- ✅ Framer Motion for page transitions
- ✅ Lottie Animations
- ✅ JWT Implementation
- ✅ Featured Foods Logic

---

## 🙋‍♂️ Presented By

**Naeeim**  
A passionate frontend developer dedicated to clean design, code, and real-world web applications.

---

