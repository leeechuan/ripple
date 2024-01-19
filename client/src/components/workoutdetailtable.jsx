// import { useWorkoutsContext } from "../hooks/useWorkoutContext"

// Format Date (date-fns)
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// import { useAuthContext } from "../hooks/useAuthContext"
import WorkoutDetail from "./workoutdetail"

// import { useEffect } from 'react'
// import { useWorkoutsContext } from '../hooks/useWorkoutContext'
// import { useAuthContext } from '../hooks/useAuthContext'
// import { json } from "stream/consumers"

const WorkoutDetailTable = ({workouts}) => {


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


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Day
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Calories Burnt
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Distance
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Duration
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>                    
                    {workouts && workouts.map((workout) => (
                        <WorkoutDetail key={workout._id} workout={workout}/>
                    ))}

                    
                </tbody>

            </table>
        </div>
    )
}

export default WorkoutDetailTable