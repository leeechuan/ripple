// import { useState } from 'react'
import './styles/themes.css'
import Homepage from "./pages/Homepage"
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {
  return(
      <div className='layout-v1'>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
      </div>
  )
}

export default App
