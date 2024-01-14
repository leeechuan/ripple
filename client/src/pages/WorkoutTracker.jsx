import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'
import WorkoutDetail from '../components/workoutdetail'
import WorkoutForm from '../components/workoutform'

const WorkoutTracker = () => {
    
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {

        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:3001/api/workouts')
            const json =await response.json()
        
        if (response.ok) {
            dispatch({type: 'SET_WORKOUTS', payload: json})
        }
        }

        fetchWorkouts()

    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetail key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default WorkoutTracker