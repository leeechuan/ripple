import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import Navbar from '../components/Navbar'
import "../styles/productlisting.css"
import ReactLoading from 'react-loading'



const ProductListing = () => {
    

    // const { userdetail, dispatch: userdispatch } = useUserContext();
    const { user } = useAuthContext();
    // const { workouts, dispatch: workoutdispatch } = useWorkoutsContext();
    const [isLoading, setIsLoading] = useState(true);




    return (
        <div className="home">
            <Navbar></Navbar>
            {isLoading ?
            <div className='plp-page'>
                <div className='weekly-goal-rings'>

                    <div>
                        <h2 className='f-h2-400 pb-5 weekly-goal-rings-header'>Summer Sale</h2>
                        <div className='flex flex-wrap justify-around '>
                        </div>                        
                    </div>


                </div>

                <div className='lg:flex gap-8'>



                </div>


            </div> :
            
            <div className=''>
            <ReactLoading
            type= "cylon"
            color= "#892929"
            ></ReactLoading>    
            
            </div>
            
            }

        </div>
    )
}

export default ProductListing