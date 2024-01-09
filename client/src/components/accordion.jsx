import React, { useState } from "react"


function Accordion(props){

    const [isContentVisible, setContentVisible] = useState(true);
      
    const toggleContentVisibility = () => {
        setContentVisible(!isContentVisible);
    };

    return (

    <div className={"py-3 hide-right delay-"+props.id}>
        <h2 id={"accordion-collapse-heading-"+props.id} className="accordion-container">
        <button onClick={toggleContentVisibility} type="button" className="z-50 accordion flex items-center justify-between w-full p-5 font-medium rtl:text-right gap-3">
            <span>{props.title}</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        </h2>
        {isContentVisible ? null : (
        <div className="">
        <div className="accordion-body p-5 border border-gray-200 dark:border-gray-700">
        <p className="mb-2 text-gray-400 dark:text-gray-400">{props.content}</p>
        </div>
        </div>
        )}
    </div>
    
    )
}

export default Accordion