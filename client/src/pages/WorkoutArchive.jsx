import { useEffect, useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'
import { useUserContext } from '../hooks/useUserContext'
import { useAuthContext } from '../hooks/useAuthContext'
// import WorkoutForm from '../components/workoutform'
import Navbar from '../components/Navbar'

import ReactLoading from 'react-loading'
import 'rsuite/DatePicker/styles/index.css';
import WorkoutArchiveTable from '../components/workoutarchivetable'


const WorkoutArchive = () => {


    const { userdetail, dispatch: userdispatch } = useUserContext();
    const { user } = useAuthContext();
    const { workouts, dispatch: workoutdispatch } = useWorkoutsContext();
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userResponse, workoutsResponse] = await Promise.all([
                    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/users`, {
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        }
                    }),
                    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/workouts`, {
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        }
                    })
                ]);

                const userJson = await userResponse.json();
                const workoutsJson = await workoutsResponse.json();

                if (userResponse.ok) {
                    userdispatch({ type: 'GET_USER', payload: userJson });
                    console.log(userJson,"--userjson")
                }

                if (workoutsResponse.ok) {
                    workoutdispatch({ type: 'SET_WORKOUTS', payload: workoutsJson });
                    console.log(workoutsJson)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (user && isLoading) {
            fetchData();
        }
    }, [userdispatch, workoutdispatch, user, isLoading, userdetail]);

    // Function to calculate totals

    // const calculateTotals = (workouts) => {
    //     if(workouts && Array.isArray(workouts)) {
    //         const total = workouts.reduce(
    //             (acc, workout) => {
    //                 acc.calories += workout.calories || 0;
    //                 acc.distance += workout.distance || 0;
    //                 acc.duration += workout.duration || 0;
    //                 return acc;
    //             },
    //             { calories: 0, distance: 0, duration: 0 }
    //         );
    //         return total;
    //     }
    //     }

    // let Var_Calories = 0
    // let Var_Distance = 0
    // let Var_Duration = 0

    // if (userdetail && userdetail.length > 0 && userdetail[0]?.goals) {
    //     Var_Calories = Math.ceil(((calculateTotals(workouts).calories || 0) / (userdetail[0]?.goals?.calories || 1)) * 100);
    //     Var_Distance = Math.ceil(((calculateTotals(workouts).distance || 0) / (userdetail[0]?.goals?.distance || 1)) * 100);
    //     Var_Duration = Math.ceil(((calculateTotals(workouts).duration || 0) / (userdetail[0]?.goals?.duration || 1)) * 100);
    // }




    return (
        <div className="home">
            <Navbar></Navbar>
            {!isLoading ?
            <div className='workoutarchive-page'>

                <WorkoutArchiveTable
                workouts = {workouts}
                ></WorkoutArchiveTable>
                    


                </div> :
                
                <div className=''>
                <ReactLoading
                type= "cylon"
                color= "#892929"
                ></ReactLoading>    
            
            </div>
            
            }

        </div>
    )
}

export default WorkoutArchive