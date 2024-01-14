import { useWorkoutsContext } from "../hooks/useWorkoutContext"

// Format Date (date-fns)
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetail = ({ workout }) => {

    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('http://localhost:3001/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }


    return (
        <div className="workout-detail">
            <h4>{workout.title}</h4>
            <p>Load (kg): {workout.load}</p>
            <p>Reps: {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix: true })}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default WorkoutDetail