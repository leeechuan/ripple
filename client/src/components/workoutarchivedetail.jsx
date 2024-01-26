// import { format } from 'date-fns/format'

const WorkoutArchiveDetail = ({ workout }) => {


    return (

        
            <tr className="odd:bg-white even:bg-[--secondary-100] border-b last:border-none">
                {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <h4 className="">{format(new Date(workout.createdAt),'EEEE')}</h4>
                </th> */}
                <td className="px-6 py-4">
                {workout.calories}
                </td>
                <td className="px-6 py-4">
                {workout.distance}
                </td>
                <td className="px-6 py-4">
                {workout.duration}
                </td>
            </tr>

        

            
        
    )
}

export default WorkoutArchiveDetail