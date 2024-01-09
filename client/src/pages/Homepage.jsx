import React , {useEffect, useState} from "react";
import '../styles/homepage.css';
import ripplehomepage from "../assets/ripplehomepage.mp4";
import aboutuspicture from "../assets/about-us-picture.png"
import influencer1 from "../assets/fitness-influencer1.png"
import influencer2 from "../assets/fitness-influencer2.png"
import influencer3 from "../assets/fitness-influencer3.png"
import promotionalbg from "../assets/promotional-bg.png"
import { Navigate } from "react-router-dom";
import Testimonial from "../components/testimonial.jsx"
import Accordion from "../components/accordion.jsx";
import PriceTable from "../components/pricetable.jsx";
import PopupModal from "../components/modal-homepage.jsx";




function Homepage(){


    // For Introduction Popup
    const [isModalOpen, setModalOpen] = useState(true);
      
    // Close the modal after a certain time or based on some condition
    useEffect(() => {
        const timeout = setTimeout(() => {
        setModalOpen(false);
        }, 30000); // Close modal after 30 seconds
      
        return () => clearTimeout(timeout);
    }, [])




    // For Hamburger Menu Dropdown
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
    // Check if the screen width is below a certain threshold (e.g., 768 pixels for tablets)
    const isMobile = window.innerWidth < 768;
    setIsMobileView(isMobile);

    // Update visibility of the menu based on the screen size
    if (!isMobile) {
        setMenuVisible(true); // Show the menu on tablets and desktops
    } else {
        // Optional: Close the menu on mobile view if needed
        setMenuVisible(false);
    }

    // Event listener to update isMobileView when the window is resized
    const handleResize = () => {
        setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);

    const toggleMenuVisibility = () => {
    setMenuVisible(!isMenuVisible);
    };




    
    // For Redirection to Login
    const [goToLogin, setGoToLogin] = React.useState(false)

    if(goToLogin) {
        return <Navigate to="/login"></Navigate>;
    }


    

    
    return(    

    
    
    <div>
        
        <div className="background-default">

            <nav className="background-default fixed w-full z-40 top-0 start-0 border-b">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://theripplegym.vercel.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="ripple-title-logo self-center font-semibold whitespace-nowrap dark:text-white">RIPPLE</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" onClick={()=> {setGoToLogin(true)}}  className="btn-primary text-white font-medium rounded-lg text-sm px-4 py-2 text-center ">Login</button>
                <button onClick={toggleMenuVisibility} data-collapse-toggle="navbar-sticky" type="button" className="z-50 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            {/* Conditonal rendering of toggle */}
            {!isMobileView || isMenuVisible ? (
            <div className="navbar-header items-center justify-between w-full md:flex md:w-auto md:order-1">
                <ul className="background-default md:gap-x-7 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                    <a href="#" className="block py-2 px-3 rounded md:p-0 hover:bg-gray-700">ABOUT US</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 rounded md:p-0 hover:bg-gray-700">TESTIMONIALS</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 rounded md:p-0 hover:bg-gray-700">CLUBS</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 rounded md:p-0 hover:bg-gray-700">PRICING</a>
                </li>
                </ul>
            </div>
            ):null}
            </div>
            </nav>

            {/* Intro Hero */}
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

            {/* About Section */}
            <div className="about-section w-full px-4">

                <div className="about-section-container secondary-default-20 max-w-screen-xl flex items-center justify-between mx-auto my-8">
                    <img className="about-us-image" src={aboutuspicture}></img>
                    <div className="about-us-text w-1/2 text-right px-8 text-default">
                        <h2 className="f-h2-700">THERE IS A NEW GYM IN TOWN</h2>
                        <h5 className="f-h5 pt-8">{"Welcome to our fitness haven, where passion meets purpose. We're not just a gym. We're a community committed to sculpting healthier lives. With state-of-the-art facilities, expert trainers, and a supportive environment, we inspire individuals to embrace their fitness journey and achieve their wellness goals."}</h5>
                        <h5 className="f-h5 pt-5 underline">Find out more</h5>
                    </div>
                </div>
                
            </div>

            {/* Testimonial Section */}
            <div className="w-full px-4 max-w-screen-xl mx-auto pb-8">

                <div className="justify-between mx-auto my-8">
                    <div className="about-us-text text-center px-8 text-default">
                        <h1 className="f-h1 testimonial-title">DONT JUST TAKE OUR WORD FOR IT</h1>
                        <h3 className="f-h3 pt-3 testimonial-subtitle">HERE ARE OUR TESTIMONIALS</h3>
                    </div>
                </div>

                <div className="lg:flex lg:justify-between mx-auto testimonial-list">
                <Testimonial
                src = {influencer1}
                name="KIERA WEAVER"
                details="35 | HOSPITALITY | METROPOLIS"
                review="“This gym exceeded my expectations with its state-of-the-art equipment and motivating atmosphere. The knowledgeable staff provided excellent guidance, ensuring a fulfilling workout experience. Clean facilities and a variety of classes make it a top choice for fitness enthusiasts.“"
                ></Testimonial>
                <Testimonial
                src = {influencer2}
                name="JULIUS CARTER"
                details="35 | MEDIA | DOWNTOWN"
                review="“Fantastic gym! Modern equipment, friendly staff, and diverse classes. It's my go-to for a satisfying workout and a welcoming fitness community.“">
                </Testimonial>
                <Testimonial
                src = {influencer3}
                name="CHARLENE LEE"
                details="26 | TECHNOLOGY | TAMPINES"
                review="“Extraordinary! I’ve never come across a better fitness website. Encourages me to hit my step count and fitness goals. Would strongly recommend to anyone looking for a new year resolution.”">
                </Testimonial>
                </div>

            </div>

            {/* FAQ Section */}

            <div className="faq-section lg:flex w-full px-4 max-w-screen-xl mx-auto py-10 items-center">
                <div className="lg:w-1/3 faq-title">
                    <h1 className="f-h1 text-primary">QUESTIONS?</h1>
                    <h1 className="f-h1 text-default">YOU MIGHT FIND YOUR ANSWER HERE</h1>
                </div>

                <div className="lg:w-2/3 faq-accordions">

                    <div id="accordion-collapse" data-accordion="collapse">
                        
                        <Accordion
                        id="1"
                        title="What types of fitness programs do you offer at your gym?"
                        content="At our gym, we provide a diverse range of fitness programs to cater to various preferences and fitness levels. Whether you're into high-intensity workouts, strength training, or group classes, we have something for everyone. Our experienced trainers are dedicated to helping you achieve your fitness goals, no matter where you are on your fitness journey.">
                        </Accordion>
                        <Accordion
                        id="2"
                        title="How can I become a member, and what are the membership options available?"
                        content="Joining our gym is easy! You can become a member by visiting our facility in person or signing up online through our website. We offer flexible membership options, including monthly and annual plans, as well as special packages for couples and families. Check out our Membership page for more details on pricing and benefits.">
                        </Accordion>
                        <Accordion
                        id="3"
                        title="What safety measures do you have in place, especially in light of current health concerns?"
                        content="Your well-being is our top priority. In response to current health concerns, we have implemented stringent safety measures throughout our facility. These include enhanced cleaning protocols, social distancing guidelines, and the availability of hand sanitizing stations. Our team is committed to providing a safe and clean environment so you can focus on your fitness with peace of mind.">
                        </Accordion>
                        <Accordion
                        id="4"
                        title="Are personal trainers available, and how can they assist me in reaching my fitness goals?"
                        content="Yes, we offer the expertise of certified personal trainers to support you on your fitness journey. Our trainers work closely with members to create personalized workout plans, provide guidance on proper techniques, and offer nutritional advice. Whether you're a beginner looking to kickstart your fitness routine or an experienced athlete aiming for specific goals, our trainers are here to help you succeed. Visit our Personal Training page to learn more about our trainers and their specialties.">
                        </Accordion>

                    </div>
                </div>
            </div>

            {/* Promotional Section*/}

            <img className="promo-background w-full" src={promotionalbg}></img>
            <div className="promo-form">
                <h4 className="promo-title f-h4 text-default">CHAT WITH US!</h4>
                    <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="name" className="block mb-2 f-label text-default">How do we address you?</label>
                        <input type="name" name="name" id="name" className="input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5" placeholder="e.g John Doe" required=""></input>
                    </div>


                    <div>
                        <label htmlFor="number" className="block mb-2 f-label text-default">Contact Number</label>
                        <input type="number" name="number" id="number" placeholder="e.g 8209 8372" className="input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5" required=""></input>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 f-label text-default">Email</label>
                        <input type="email" name="email" id="email" placeholder="e.g ripplegym@ymail.com" className="input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5" required=""></input>
                    </div>
                    </form>


                    <button type="submit" className="mt-8 w-full btn-primary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Contact Me!</button>
                    
            </div>

            {/* Pricing Section */}

            <div>
                <div className="w-full px-4 max-w-screen-xl mx-auto pb-8">

                    <div className="justify-between mx-auto my-8">
                        <div className="about-us-text text-center px-8 text-default">
                            <h1 className="f-h1 price-title">PLANS & PRICING</h1>
                            <h3 className="f-h3 pt-3 price-subtitle text-primary">TRANSPARENT FLAT RATES</h3>
                        </div>
                    </div>

                    <div className="lg:flex lg:justify-between mx-auto price-list">
                        <PriceTable
                        id= "1"
                        title="CASUAL"
                        price="$20/WEEK"
                        grade= "1"
                        isMostPopular="false">
                        </PriceTable>
                        
                        <PriceTable
                        id= "2"
                        title="REGULAR"
                        price="$30/WEEK"
                        grade= "2"
                        isMostPopular="true">
                        </PriceTable>

                        <PriceTable
                        id= "3"
                        title="PREMIUM"
                        price="$70/WEEK"
                        grade= "3"
                        isMostPopular="false">
                        </PriceTable>
                    </div>
                </div>

                
            </div>

            {/* Footer Section */}


            <footer className="secondary-default-20 text-default">
                <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
                        <ul className="font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline text-faint">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Help center</h2>
                        <ul className="font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                        <ul className="font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Download</h2>
                        <ul className="font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">iOS</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Android</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">Windows</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-faint">MacOS</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 md:flex md:items-center md:justify-between">
                    <span className="text-sm sm:text-center">© 2024 <a href="https://leeechuan.github.io/portfolio/">Ang Lee Chuan</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <a href="https://www.instagram.com/leee_chuan/" className="text-gray-400 hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://github.com/leeechuan/" className="text-gray-400 hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="https://www.linkedin.com/in/aleechuan/" className="text-gray-400 hover:text-white">

                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"/>
                            <path d="M3 5.012H0V15h3V5.012Z"/>
                            <span className="sr-only">LinkedIn</span>
                            </svg>
                        </a>
                    </div>
                </div>
                </div>
            </footer>




            
        </div>
        
        <PopupModal>
            
        </PopupModal>
        {isModalOpen && <PopupModal isOpen={isModalOpen} closeModal={() => setModalOpen(false)} />}
        


    </div>

    
    )
}

export default Homepage