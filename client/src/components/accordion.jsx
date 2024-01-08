import React from "react"


function Accordion(props){

    return (

    <div className="pt-2">
        <h2 id={"accordion-collapse-heading-"+props.id} className="accordion-container">
        <button type="button" className="accordion flex items-center justify-between w-full p-5 font-medium rtl:text-right gap-3" data-accordion-target={"#accordion-collapse-body-"+props.id} aria-expanded="false" aria-controls={"accordion-collapse-body-"+props.id}>
            <span>{props.title}</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        </h2>

        <div id={"accordion-collapse-body-"+props.id} className="hidden" aria-labelledby={"accordion-collapse-heading-"+props.id}>
        <div className="accordion-body p-5 border border-gray-200 dark:border-gray-700">
        <p className="mb-2 text-gray-500 dark:text-gray-400">{props.content}</p>
        </div>
        </div>
    </div>
    
    )
}

export default Accordion