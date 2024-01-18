// import { useWorkoutsContext } from "../hooks/useWorkoutContext"

// Format Date (date-fns)
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// import { useAuthContext } from "../hooks/useAuthContext"
import WorkoutDetail from "./workoutdetail"

import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutDetailTable = () => {

    // const { dispatch } = useWorkoutsContext()
    // const { user } = useAuthContext()

    // const handleClick = async () => {
    //     if(!user){
    //         return
    //     }

    //     const response = await fetch('http://localhost:3001/api/workouts/' + workout._id, {
    //         method: 'DELETE',
    //         headers: {
    //             'Authorization': `Bearer ${user.token}`
    //         }
    //     })
    //     const json = await response.json()

    //     if (response.ok){
    //         dispatch({type: 'DELETE_WORKOUT', payload: json})
    //     }
    // }

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
                    {/* <WorkoutDetail
                    key={workout._id} workout={workout}></WorkoutDetail> */}
                    {/* <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {workout.title}
                        </th>
                        <td className="px-6 py-4">
                            {workout.title}
                        </td>
                        <td className="px-6 py-4">
                            {workout.load}
                        </td>
                        <td className="px-6 py-4">
                            {workout.reps}
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr> */}
                    
                </tbody>
            </table>
        </div>
    )
}

export default WorkoutDetailTable