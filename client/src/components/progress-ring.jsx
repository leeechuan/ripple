import React from "react"


function ProgressRing(props){

 return(
    <div className="">
    <div className="relative w-40 h-40 mb-10">
    <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* <!-- Background circle --> */}
        <circle
        className="text-gray-200 stroke-current"
        strokeWidth="10"
        
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        ></circle>
        {/* <!-- Progress circle --> */}
        <circle
        className={props.color + " progress-ring__circle stroke-current"}
        strokeWidth="10"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        strokeDashoffset={"calc((400 - (400 * 62 / 100 *" + props.percentage + ")/100))"}
        ></circle>
        
        {/* <!-- Center text --> */}
        <text x="50" y="50" fontFamily="Verdana" fontSize="12" textAnchor="middle" alignmentBaseline="middle">{props.percentage + "%"}</text>

    </svg>
    <h2 className="f-h5-400 text-center">{props.title}</h2>
    </div>


    </div>
 )
}


export default ProgressRing