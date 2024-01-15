import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'
import WorkoutDetail from '../components/workoutdetail'
import WorkoutForm from '../components/workoutform'
import Navbar from '../components/Navbar'
import "../styles/workouttracker.css"

const WorkoutTracker = () => {
    
    const {workouts, dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()

    useEffect(() => {

        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:3001/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json =await response.json()
        
        if (response.ok) {
            dispatch({type: 'SET_WORKOUTS', payload: json})
        }
        }

        if(user) {
            fetchWorkouts()
        }
        
    }, [dispatch, user])

    return (
        <div className="home">
            <Navbar></Navbar>
            <div className='workout-page'>
                <div className="workouts">
                    {workouts && workouts.map((workout) => (
                        <WorkoutDetail key={workout._id} workout={workout}/>
                    ))}
                </div>
                <WorkoutForm/>
            </div>

        </div>
    )
}

export default WorkoutTracker