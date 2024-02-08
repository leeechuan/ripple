// import { useState } from 'react'
import './styles/themes.css'
import Homepage from "./pages/Homepage"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import WorkoutTracker from './pages/WorkoutTracker'
import UserDetail from './pages/UserDetail'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import WorkoutArchive from './pages/WorkoutArchive'
import ProductListing from './pages/ProductListingPage'




function App() {
  const { user } = useAuthContext()

  return(
      <div className='layout-v1'>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/workout"></Navigate>}></Route>
            <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/workout"></Navigate>}></Route>
            <Route path="/forgotpassword" element={!user ? <ForgotPassword /> : <Navigate to="/workout"></Navigate>}></Route>
            <Route path="/resetpassword/:token" element={!user ? <ResetPassword /> : <Navigate to="/workout"></Navigate>}></Route>
            <Route path="/workout" element={user ? <WorkoutTracker /> : <Navigate to="/login"></Navigate>}></Route>
            <Route path="/userdetail" element={user ? <UserDetail /> : <Navigate to="/login"></Navigate>}></Route>
            <Route path="/workoutarchive" element={user ? <WorkoutArchive /> : <Navigate to="/login"></Navigate>}></Route>
            <Route path="/products" element={user ? <ProductListing /> : <Navigate to="/login"></Navigate>}></Route>
          </Routes>
        </Router>
      </div>
  )
}

export default App
