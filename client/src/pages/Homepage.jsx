import React from "react";
import '../styles/homepage.css';
import ripplehomepage from "../assets/ripplehomepage.mp4";
import aboutuspicture from "../assets/about-us-picture.png"
// import influencer1 from "../assets/fitness-influencer1.png"
// import influencer2 from "../assets/fitness-influencer2.png"
// import influencer3 from "../assets/fitness-influencer3.png"
import NavbarListener from '../scripts/homepage.js';
import { Navigate } from "react-router-dom";
import Testimonial from "../components/testimonial.jsx"


function Homepage(){


    const [goToContact, setGoToContact] = React.useState(false)

    if(goToContact) {
        return <Navigate to="/login"></Navigate>;
    }
    
    NavbarListener()


    return(    
    
    <div>
    
        <div className="background-default">

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

            <div className="about-section w-full px-4">

                <div className="about-section-container secondary-default-20 max-w-screen-xl flex items-center justify-between mx-auto my-8">
                    {/* <img className="about-us-image" src="./src/assets/about-us-picture.png"></img> */}
                    <img className="about-us-image" src={aboutuspicture}></img>
                    <div className="about-us-text w-1/2 text-right px-8 text-default">
                        <h2 className="f-h2-700">THERE IS A NEW GYM IN TOWN</h2>
                        <h5 className="f-h5 pt-8">{"Welcome to our fitness haven, where passion meets purpose. We're not just a gym. We're a community committed to sculpting healthier lives. With state-of-the-art facilities, expert trainers, and a supportive environment, we inspire individuals to embrace their fitness journey and achieve their wellness goals."}</h5>
                        <h5 className="f-h5 pt-5 underline">Find out more</h5>
                    </div>
                </div>
                
            </div>

            <div className="testimonial-section w-full px-4">

                <div className="testimonial-section-container max-w-screen-xl justify-between mx-auto my-8">
                    <div className="about-us-text text-center px-8 text-default">
                        <h1 className="f-h1 testimonial-title">DONT JUST TAKE OUR WORD FOR IT</h1>
                        <h3 className="f-h3 pt-3 testimonial-subtitle">HERE ARE OUR TESTIMONIALS</h3>
                    </div>
                </div>
                <Testimonial
                img = "./src/assets/fitness-influencer1.png"
                name="KIERA WEAVER"
                details="35 | HOSPITALITY | METROPOLIS"
                review="“This gym exceeded my expectations with its state-of-the-art equipment and motivating atmosphere. The knowledgeable staff provided excellent guidance, ensuring a fulfilling workout experience. Clean facilities and a variety of classes make it a top choice for fitness enthusiasts.“"
                ></Testimonial>
                <Testimonial
                img = "./src/assets/fitness-influencer2.png"
                name="JULIUS CARTER"
                details="35 | MEDIA | DOWNTOWN"
                review="“Fantastic gym! Modern equipment, friendly staff, and diverse classes. It's my go-to for a satisfying workout and a welcoming fitness community.“">
                </Testimonial>
                <Testimonial
                img = "./src/assets/fitness-influencer3.png"
                name="CHARLENE LEE"
                details="26 | TECHNOLOGY | TAMPINES"
                review="“Extraordinary! I’ve never come across a better fitness website. Encourages me to hit my step count and fitness goals. Would strongly recommend to anyone looking for a new year resolution.”">
                </Testimonial>
            </div>

        </div>


    </div>

    
    )
}

export default Homepage