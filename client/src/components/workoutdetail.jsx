import { useWorkoutsContext } from "../hooks/useWorkoutContext"

// Format Date (date-fns)
import { format } from 'date-fns/format'
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from "../hooks/useAuthContext"

const WorkoutDetail = ({ workout }) => {

    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if(!user){
            return
        }

        const response = await fetch('https://ripple-backend.vercel.app/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }


    return (
        // <div className="workout-detail f-h5-400 flex">
        //     <div className="w-5/6">
        //         <h4 className="workout-title f-h3-400">{workout.title}</h4>
        //         <p>Load (kg): {workout.load}</p>
        //         <p>Reps: {workout.reps}</p>
        //         <p className="italic">{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix: true })}</p>
        //     </div>
        //     <div className="w-1/6">
        //         <svg onClick={handleClick} className="h-6 w-6 ml-auto mt-1 text-red-500 delete-workout-icon"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
        //     </div>

        // </div>


        
            <tr className="odd:bg-white even:bg-[--secondary-100] border-b last:border-none">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <h4 className="">{format(new Date(workout.createdAt),'EEEE')}</h4>
                </th>
                <td className="px-6 py-4">
                {workout.calories}
                </td>
                <td className="px-6 py-4">
                {workout.distance}
                </td>
                <td className="px-6 py-4">
                {workout.duration}
                </td>
                <td className="px-6 py-4">
                <svg onClick={handleClick} className="h-6 w-6 mt-1 text-red-500 delete-workout-icon"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                </td>
            </tr>

        

            
        
    )
}

export default WorkoutDetail