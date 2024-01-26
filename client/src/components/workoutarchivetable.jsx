import WorkoutArchiveDetail from "./workoutarchivedetail"


const WorkoutArchiveTable = ({workouts}) => {


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Calories Burnt
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Distance
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Duration
                        </th>

                    </tr>
                </thead>
                <tbody>                    
                    {workouts && workouts.map((workout) => (
                        <WorkoutArchiveDetail key={workout._id} workout={workout}/>
                    ))}

                    
                </tbody>

            </table>
        </div>
    )
}

export default WorkoutArchiveTable