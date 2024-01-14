import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"

const WorkoutForm = () => {
    
    const { dispatch } = useWorkoutsContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('http://localhost:3001/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
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
            setTitle('')
            setLoad('')
            setReps('')
            console.log('New workout added:', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }
    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Excerise Title:</label>
            <input className={emptyFields.includes('title') ? 'error' : ''}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}></input>

            <input className={emptyFields.includes('load') ? 'error' : ''}
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}></input>

            <input className={emptyFields.includes('reps') ? 'error' : ''}
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}></input>

            <button>Add a workout</button>
            {error && <div className="error">{error}</div>}
        </form>



    )
}

export default WorkoutForm