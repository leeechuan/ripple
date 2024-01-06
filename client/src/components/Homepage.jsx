import React from "react";
import '../styles/homepage.css'
import ripplehomepage from "../assets/ripplehomepage.mp4"

function Homepage(){
    return(    
    
    <div>
    

    <div className="landing-page-bg">

        {/* <h1 className="main-title py-6 bg-gradient-to-r from-pink-700 via-grey-500 to-yellow-200 text-transparent bg-clip-text">RIPPLE</h1>
        <h1 className="text-3xl font-bold underline">RIPPLE</h1> */}

        <video autoPlay muted loop className="homepage-video" src={ripplehomepage}> 
        </video>
        

        <div className="homepage-intro-content">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet, an his etiam torquatos.</p>
        </div>

    </div>


    </div>

    
    )
}

export default Homepage