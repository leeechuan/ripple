import React, { useEffect } from "react";
import '../styles/login.css';
import LoginSpiral from "../scripts/loginspiral";

function Login(){

    useEffect(() => {
        LoginSpiral();
    })

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
            <div className="login-container secondary-default-20 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="font-bold text-center f-h2 text-default">
                LOGIN
            </h2>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="username" className="block mb-2 f-label text-default">Username</label>
                    <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required=""></input>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 f-label text-default">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">

                    </div>
                    <a href="#" className="f-h6-400 text-default text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full btn-primary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p className="f-h6-400 text-default text-center mb-10">
                      {"Don't have an account with us? "}
                    <a href="#" className="font-medium text-primary-600 underline dark:text-primary-500">Sign up</a>
                </p>
            </form>


        </div>





        </div>



        
    </div>
</div>



    
    )
}

export default Login