import WorkoutArchiveDetail from "./workoutarchivedetail"


const WorkoutArchiveTable = ({archive}) => {


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Week Ending In
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Calories Burnt
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Distance
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Duration
                        </th>

                    </tr>
                </thead>
                <tbody>                    
                    {archive && archive.map((archive) => (
                        <WorkoutArchiveDetail key={archive._id} archive={archive}/>
                    ))}
                    {/* {Array.isArray(archive) &&
                    archive.map((archiveItem) => (
                    <WorkoutArchiveDetail key={archiveItem._id} archive={archiveItem} />
                    ))} */}

                    
                </tbody>

            </table>
        </div>
    )
}

export default WorkoutArchiveTable