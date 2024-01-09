import React from "react"


function PriceTable(props){

    const gradeLevel = parseInt(props.grade)


    return (

    <div className={(([props.isMostPopular]=="false") ? "secondary-default-20" : "primary-default-20") + " text-default price-indiv-container px-6 py-8"}>
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg xl:p-8">
        <p className={(([props.isMostPopular]=="false") ? "hide-perk" : "") + " popular-tag pb-4"}>Most Popular</p>
            <h2 className="mb-4 font-bold">{props.title}</h2>
            <h4 className="pb-8">{props.price}</h4>

            <ul role="list" className="mb-8 space-y-4 text-left">

                <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>FREE SPORTS ATTIRE</span>
                </li>
                <li className="flex items-center space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>ACCESS TO GYM SHOWERS</span>
                </li>


                <li className={((gradeLevel>1) ? "" : "hide-perk") + " flex items-center space-x-3"}>

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>MEMBERSHIP EXCLUSIVE DEALS</span>
                </li>
                <li className={((gradeLevel>1) ? "" : "hide-perk") + " flex items-center space-x-3"}>

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>COMPLIMENTARY ENERGY DRINK</span>
                </li>
                <li className={((gradeLevel>2) ? "" : "hide-perk") + " flex items-center space-x-3"}>

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>GYM PASSPORT</span>
                </li>
                <li className={((gradeLevel>2) ? "" : "hide-perk") + " flex items-center space-x-3"}>

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>1-1 CONSULTATION</span>
                </li>
                <li className={((gradeLevel>2) ? "" : "hide-perk") + " flex items-center space-x-3"}>

                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>WEEKLY GUEST PASS</span>
                </li>
            </ul>

            <a href="#" className={(([props.isMostPopular]=="false") ? "btn-secondary-solid" : "btn-primary") + " mt-5 text-default bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"}>Get started</a>
        </div>
    </div>
    
    )
}

export default PriceTable