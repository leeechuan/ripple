import React from "react";
import '../styles/homepage.css';
import ripplehomepage from "../assets/ripplehomepage.mp4";
import NavbarListener from '../scripts/homepage.js';
import { Navigate } from "react-router-dom"

function Homepage(){


    const [goToContact, setGoToContact] = React.useState(false)

    if(goToContact) {
        return <Navigate to="/login"></Navigate>;
    }
    
    NavbarListener()


    return(    
    
    <div>
    

    <div className="background-default">

        {/* <h1 className="main-title py-6 bg-gradient-to-r from-pink-700 via-grey-500 to-yellow-200 text-transparent bg-clip-text">RIPPLE</h1>
        <h1 className="text-3xl font-bold underline">RIPPLE</h1> */}

        <nav className="background-default fixed w-full z-40 top-0 start-0 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://theripplegym.vercel.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="ripple-title-logo self-center font-semibold whitespace-nowrap dark:text-white">RIPPLE</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" onClick={()=> {setGoToContact(true)}}  className="btn-primary text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Login</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" id="navbar-hamburger">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div className="navbar-header items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="background-default md:gap-x-7 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ABOUT US</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">TESTIMONIALS</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CLUBS</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PRICING</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>

        <header className="relative flex items-center justify-center h-screen overflow-hidden"> 
            <div className="px-12 text-center">
                <div className="hero-title relative pb-8 z-30 text-white">
                    <h1 className="inline">PUSH YOUR </h1>
                    <h1 className="inline hero-title-highlight">LIMITS</h1>
                </div>
                <h3 className="hero-caption relative pb-8 z-30 text-white">SCULPT YOUR IDEAL, ONE REP AT A TIME</h3>
                <button href= "https://theripplegym.vercel.app/" className="btn-primary relative z-30 p-5 text-2xl text-white bg-green-400 bg-opacity-50 rounded-xl"> Get Started </button> 
            </div>
            
            <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none" src= {ripplehomepage}> </video> 
        </header> 

        {/* <video autoPlay muted loop className="homepage-video absolute z-10 w-auto min-w-full min-h-full max-w-none" src={ripplehomepage}> 
        </video>
        

        <div className="homepage-intro-content">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet, an his etiam torquatos.</p>
        </div> */}

    </div>


    </div>

    
    )
}

export default Homepage