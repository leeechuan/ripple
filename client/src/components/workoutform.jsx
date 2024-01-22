import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"
import { useAuthContext } from "../hooks/useAuthContext"

const WorkoutForm = () => {
    
    const { dispatch } = useWorkoutsContext()

    const [calories, setCalories] = useState('')
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!user){
            setError('You must be logged in')
            return
        }

        const workout = {calories, distance, duration}

        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/workouts`,{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setError(null)
            setEmptyFields([])
            setCalories('')
            setDistance('')
            setDuration('')
            console.log('New workout added:', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }
    
    return (
        <form className="create workout-create-form" onSubmit={handleSubmit}>
            <h3 className="f-h3-400">Add a New Workout</h3>
            <label className="f-label block mb-2 mt-4">Estimated Calories Burnt:</label>
            <input className={"input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5 " + (emptyFields.includes('calories') ? 'error' : '')}
            type="number"
            onChange={(e) => setCalories(e.target.value)}
            value={calories}
            placeholder="in kcal (e.g 159)"></input>
            <label className="f-label block mb-2 mt-4">Distance Ran:</label>
            <input className={"input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5 " + (emptyFields.includes('distance') ? 'error' : '')}
            type="number"
            onChange={(e) => setDistance(e.target.value)}
            value={distance}
            placeholder="in km (e.g 2.4)"></input>
            <label className="f-label block mb-2 mt-4">Effective Gym Time:</label>
            <input className={"input-outline focus:outline-none focus:ring-0 border f-label rounded-lg block w-full p-2.5 " + (emptyFields.includes('duration') ? 'error' : '')}
            type="number"
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
            placeholder="in minutes (e.g 50)"></input>

            <button className="btn-primary text-default p-2 mt-6">Add a workout</button>
            {error && <div className="error">{error}</div>}
        </form>



    )
}

export default WorkoutForm