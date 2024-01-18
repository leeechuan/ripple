import { useEffect } from 'react'
// import { useWorkoutsContext } from '../hooks/useWorkoutContext'
import { useUserContext } from '../hooks/useUserContext'
import { useAuthContext } from '../hooks/useAuthContext'
// import WorkoutDetail from '../components/workoutdetail'
import WorkoutForm from '../components/workoutform'
import Navbar from '../components/Navbar'
import "../styles/workouttracker.css"
import ProgressRing from '../components/progress-ring'
import WorkoutDetailTable from '../components/workoutdetailtable'
import { json } from 'react-router-dom'

const WorkoutTracker = () => {
    
    // const {workouts, dispatch} = useWorkoutsContext()
    // const {user} = useAuthContext()

    // useEffect(() => {

    //     const fetchWorkouts = async () => {
    //         const response = await fetch('http://localhost:3001/api/workouts', {
    //             headers: {
    //                 'Authorization': `Bearer ${user.token}`
    //             }
    //         })
    //         const json =await response.json()
        
    //     if (response.ok) {
    //         dispatch({type: 'SET_WORKOUTS', payload: json})
    //     }
    //     }

    //     if(user) {
    //         fetchWorkouts()
    //     }
        
    // }, [dispatch, user])



    const {userdetail, dispatch} = useUserContext()
    const {user} = useAuthContext()

    useEffect(() => {

        const fetchUser = async () => {
            const response = await fetch('http://localhost:3001/api/users', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json =await response.json()
        
            if (response.ok) {
                dispatch({type: 'GET_USER', payload: json})
            }
            }

            if(user) {
                fetchUser()
            } 
            
            
        
    }, [dispatch, user])

    // useEffect(() => {
    //     console.log('Updated userdetail:', userdetail[0].email);
    //   }, [userdetail]);

   






    return (
        <div className="home">
            <Navbar></Navbar>
            <div className='workout-page'>
                <div className='weekly-goal-rings'>

                    <h2 className='f-h2-400 pb-5 weekly-goal-rings-header'>My Weekly Goals</h2>
                    <div className='flex flex-wrap justify-around '>
                    <ProgressRing
                    color="text-indigo-400"
                    percentage= {userdetail[0].goals.calories}
                    title="Calories"
                    ></ProgressRing>
                    <ProgressRing
                    color="text-lime-400"
                    percentage= {userdetail[0].goals.distance}
                    title="Distance"
                    ></ProgressRing>
                    <ProgressRing
                    color="text-rose-400"
                    percentage= {userdetail[0].goals.duration}
                    title="Effective Duration"
                    ></ProgressRing>
                    </div>


                </div>

                <div className='lg:flex gap-8'>

                    <div className='workout-form mt-10'>
                    <WorkoutForm/>                    
                    </div>

                    <div className='workout-detail-table mt-10'>

                        <WorkoutDetailTable/>

                    {/* <WorkoutDetailTable></WorkoutDetailTable> */}
                    </div>

                </div>





                {/* <div className="workouts w-auto">
                    {workouts && workouts.map((workout) => (
                        <WorkoutDetail key={workout._id} workout={workout}/>
                    ))}
                </div> */}


            </div>

        </div>
    )
}

export default WorkoutTracker