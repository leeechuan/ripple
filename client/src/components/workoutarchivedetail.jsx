// import { format } from 'date-fns/format'

const WorkoutArchiveDetail = ({ archive }) => {

    function getWeekEndingDate(weekNumber, year) {
        // Calculate the date of the first day of the first week in the given year
        const firstDayOfYear = new Date(year, 0, 1);
        const daysToFirstWeekStart = 7 - firstDayOfYear.getDay();
        const firstWeekStartDate = new Date(year, 0, 1 + daysToFirstWeekStart);
      
        // Calculate the number of days to add to the first day of the first week
        // to get to the desired week
        const daysToAdd = (weekNumber - 1) * 7;
      
        // Calculate the week ending date by adding the days to the first day of the week
        const weekEndingDate = new Date(firstWeekStartDate);
        weekEndingDate.setDate(firstWeekStartDate.getDate() + daysToAdd);
      
        return weekEndingDate;
      }

      const weekendingDate = getWeekEndingDate(archive.week, archive.year).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })


    return (

        
            <tr className="odd:bg-white even:bg-[--secondary-100] border-b last:border-none">
                {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <h4 className="">{format(new Date(workout.createdAt),'EEEE')}</h4>
                </th> */}
                <td className="px-6 py-4">
                {weekendingDate}
                </td>
                <td className="px-6 py-4">
                {archive.totalCalories}
                </td>
                <td className="px-6 py-4">
                {archive.totalDistance}
                </td>
                <td className="px-6 py-4">
                {archive.totalDuration}
                </td>
            </tr>

        

            
        
    )
}

export default WorkoutArchiveDetail