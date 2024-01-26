import '../styles/navbar.css'
import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import { useLogout } from "../hooks/useLogout";
// import { useAuthContext } from "../hooks/useAuthContext";
import { useUserContext } from '../hooks/useUserContext';
import { useNavigate } from "react-router-dom";


function Navbar(){

    const navigate = useNavigate();



    const{ logout } = useLogout()
    // const{ user } = useAuthContext()
    const{ user } = useUserContext()

    const handleClick = () => {
        logout()
    }


        // For Sidebar Dropdown
        const [isSidebarVisible, setSidebarVisible] = useState(false);
        const [isMobileView, setIsMobileView] = useState(false);
        
        useEffect(() => {
          const isMobile = window.innerWidth < 768;
          setIsMobileView(isMobile);
        
          if (!isMobile) {
            setSidebarVisible(true);
          } else {
            setSidebarVisible(false);
          }
        
          const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
          };
        
          window.addEventListener('resize', handleResize);
        
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        
        const toggleSidebarVisibility = () => {
          setSidebarVisible(!isSidebarVisible);
        };
        
        // For Profile Dropdown
        const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(true);
        
        useEffect(() => {
          const isMobile = window.innerWidth < 768;
          setIsMobileView(isMobile);
        
          if (!isMobile) {
            setProfileDropdownVisible(true);
          } else {
            setProfileDropdownVisible(true);
          }
        
          const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
          };
        
          window.addEventListener('resize', handleResize);
        
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        
        const toggleProfileDropdownVisibility = () => {
          setProfileDropdownVisible(!isProfileDropdownVisible);
        }


    


    return(  
    
    <div className="navbar">

            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="background-default px-3 py-3 lg:px-5 lg:pl-3">
                <div className ="flex items-center justify-between">
                <div className="flex items-center justify-start rtl:justify-end">
                    <button onClick={toggleSidebarVisibility} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                    <a href="/workout" className="flex ms-2 md:me-24">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" /> */}
                    <span className="ripple-title-logo self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">RIPPLE</span>
                    </a>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center ms-3">
                        <div>
                        <button onClick={toggleProfileDropdownVisibility} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"></img>
                        </button>
                        </div>
                        {!isProfileDropdownVisible ? (
                            <div>
                                <div className="absolute top-12 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow " >
                                    {user && (                                    
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm text-gray-900" role="none">
                                            {/* {user[0].firstname && user[0].lastname ? `${user[0].firstname} ${user[0].lastname}`: user[0].firstname|| user[0].lastname || 'User'} */}
                                            {'Welcome back!'}
                                            </p>

                                                
                                            <p className="text-sm font-medium text-gray-900 truncate" role="none">
                                            {user[0].email}
                                            </p>


                                        </div>
                                    )}
                                <ul className="py-1" role="none">
                                    <li>
                                    <a onClick={handleClick} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                                    </li>
                                </ul>
                                </div>                                
                            </div>

                        ):null}
                    </div>
                    </div>
                </div>
            </div>
            </nav>

            {!isMobileView || isSidebarVisible ? (
                <aside id="logo-sidebar" className={"fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0"} aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => navigate("/workout")}  className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Workout Tracker</span>
                            <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-red-100 rounded-full">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => navigate("/userdetail")} className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">User Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>

                    </ul>
                </div>
                </aside>
            ):null}

            <div className="p-4 sm:ml-64">
            </div>

    </div>



    
    )
}

export default Navbar