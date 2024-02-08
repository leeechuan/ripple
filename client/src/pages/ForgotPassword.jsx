import React, { useEffect, useState } from "react";
import '../styles/login.css';
import LoginSpiral from "../scripts/loginspiral.js";
// import { useLogin } from "../hooks/useLogin.js";
import { useForgotPassword } from "../hooks/useForgotPassword.js";
import { useNavigate } from "react-router-dom";

function ForgotPassword(){

    const navigate = useNavigate();

    useEffect(() => {
        //Precautionary check to prevent js from running unnecessarily on other pages
        if (window.location.pathname === '/login1')
        LoginSpiral();
    })

    const [email ,setEmail] = useState('')
    // const {login, error, isLoading} = useLogin()
    const {forgotpassword, error, isLoading} = useForgotPassword()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await forgotpassword(email);

    }

    return(    
    
    <div className="forgot-password-page">

    
        <div className="bg-default-full">

            <div className="spiral-container">
                <div id="spiral" className="spiral"></div>
                <div id="spiral2" className="spiral"></div>
            </div>

            <div className="login-container secondary-default-20 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="font-bold text-center f-h2-title text-default">
                Forgot Password
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 f-label text-default">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5" placeholder="Email" required=""></input>
                </div>

                
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                    </div>
                </div>
                <button disabled={isLoading} type="submit" className="w-full btn-primary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send Email</button>

                {error && <div className={error == 'Email has been sent!' ? 'success' : 'error'}>{error}</div>}
            </form>


        </div>





        </div>



        
    </div>
</div>



    
    )
}

export default ForgotPassword