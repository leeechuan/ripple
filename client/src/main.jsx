import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { WorkoutsContextProvider } from './context/WorkoutContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { UserContextProvider } from './context/UserContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <WorkoutsContextProvider>
          <App />      
        </WorkoutsContextProvider>        
      </UserContextProvider>
    </AuthContextProvider>


  </React.StrictMode>,
)
