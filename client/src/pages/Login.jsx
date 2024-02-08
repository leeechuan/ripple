import React, { useEffect, useState } from "react";
import '../styles/login.css';
import LoginSpiral from "../scripts/loginspiral.js";
import { useLogin } from "../hooks/useLogin.js";
// import Navbar from "../components/Navbar.jsx";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(){

    useEffect(() => {
        //Precautionary check to prevent js from running unnecessarily on other pages
        if (window.location.pathname === '/login1')
        LoginSpiral();
    })

    const [email ,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    const navigate = useNavigate();

    

    // // For Redirection to Signup
    // const [goToSignup, setGoToSignup] = React.useState(false)

    // if(goToSignup) {
    //     return <Navigate to="/signup"></Navigate>;
    // }



    return(    
    
    <div className="login-page">

    
        <div className="bg-default-full">

            <div className="spiral-container">
                <div id="spiral" className="spiral"></div>
                <div id="spiral2" className="spiral"></div>
            </div>

            {/* <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="" alt="logo">Flowbite</img>          
                </a> */}
            <div className="login-container secondary-default-20 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="font-bold text-center f-h2-title text-default">
                LOGIN
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 f-label text-default">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5" placeholder="Email" required=""></input>
                </div>


                <div>
                    <label htmlFor="password" className="block mb-2 f-label text-default">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5" required=""></input>
                </div>

                
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                    </div>
                    <a onClick={() => navigate("/forgotpassword")} href="#" className="f-h6-400 text-default text-primary-600 hover:underline">Forgot password?</a>
                </div>
                <button disabled={isLoading} type="submit" className="w-full btn-primary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p className="f-h6-400 text-default text-center">
                      {"Don't have an account with us? "}
                    <a onClick={() => navigate("/signup")} className="font-medium text-primary-600 underline cursor-pointer">Sign up</a>
                </p>
                {error && <div className="error">{error}</div>}
            </form>


        </div>





        </div>



        
    </div>
</div>



    
    )
}

export default Login