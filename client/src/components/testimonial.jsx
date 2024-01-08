import React from "react"


function Testimonial(props){

    return (

        <div>
            <img src={props.src}></img>
            <h4>{props.name}</h4>
            <h6>{props.details}</h6>
            <h6>{props.review}</h6>
        </div>
    )
}


export default Testimonial