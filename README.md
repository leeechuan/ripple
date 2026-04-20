# Ripple - Fitness Tracking App

> [!NOTE]
> **Project Status: Decommissioned / Archive Only**  
> This project is no longer actively maintained. To ensure the application remains accessible as a portfolio piece, all external dependencies (MongoDB, SMTP, etc.) have been removed and replaced with in-memory mocks.

## 🌊 Overview
Ripple is a fitness tracking application designed to help users log workouts, monitor their progress, and manage their fitness profiles. It features a clean, responsive UI and a robust set of tracking tools.

## 🛠 Tech Stack (Original)
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT & Bcrypt
- **Email**: Nodemailer (SMTP)
- **Deployment**: Vercel

## 🔄 Current State (Mocked Demo)
The project has been refactored into a **static-compatible demo**. This means you can explore the full interface and functionality without needing a live database or environment variables.

- **In-Memory Storage**: The backend now uses a mocked in-memory database. Data persists while the server is running but will reset on restart.
- **Mocked Auth**: Authentication flows (Login/Signup) are functional but return mocked tokens and profiles.
- **Disabled Services**: Real email sending and database writes to Atlas have been disabled to eliminate dependency on external services.
- **Cleaned History**: All sensitive API keys and database credentials have been purged from the repository history.

## 🚀 Running Locally

### 1. Prerequisites
- Node.js installed on your machine.

### 2. Start the Backend
```bash
cd server
npm install
npm run dev 
# Server runs on http://localhost:3001
```

### 3. Start the Frontend
```bash
cd client
npm install
npm run dev
# App runs on http://localhost:5173
```
