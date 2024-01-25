import { useEffect, useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'
import { useUserContext } from '../hooks/useUserContext'
import { useAuthContext } from '../hooks/useAuthContext'
// import WorkoutDetail from '../components/workoutdetail'
import WorkoutForm from '../components/workoutform'
import Navbar from '../components/Navbar'
import "../styles/workouttracker.css"
import ProgressRing from '../components/progress-ring'
import WorkoutDetailTable from '../components/workoutdetailtable'
// import { json } from 'react-router-dom'



const WorkoutTracker = () => {
    

    const { userdetail, dispatch: userdispatch } = useUserContext();
    const { user } = useAuthContext();
    const { workouts, dispatch: workoutdispatch } = useWorkoutsContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log(userdetail, "--userdetail")
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

    useEffect(() =>{
        console.log(userdetail, "--userdetail after dispatch")
    },[userdetail])



    // Function to calculate totals

    const calculateTotals = (workouts) => {
        if(workouts && Array.isArray(workouts)) {
            const total = workouts.reduce(
                (acc, workout) => {
                    acc.calories += workout.calories || 0;
                    acc.distance += workout.distance || 0;
                    acc.duration += workout.duration || 0;
                    return acc;
                },
                { calories: 0, distance: 0, duration: 0 }
            );
            return total;
        }
        }

    let Var_Calories = 0
    let Var_Distance = 0
    let Var_Duration = 0

    if (userdetail && userdetail.length > 0 && userdetail[0]?.goals) {
        // Var_Calories = Math.ceil(((calculateTotals(workouts).calories)/(userdetail[0].goals.calories))*100)
        // Var_Distance = Math.ceil(((calculateTotals(workouts).distance)/(userdetail[0].goals.distance))*100)
        // Var_Duration = Math.ceil(((calculateTotals(workouts).duration)/(userdetail[0].goals.duration))*100)
        Var_Calories = Math.ceil(((calculateTotals(workouts).calories || 0) / (userdetail[0]?.goals?.calories || 1)) * 100);
        Var_Distance = Math.ceil(((calculateTotals(workouts).distance || 0) / (userdetail[0]?.goals?.distance || 1)) * 100);
        Var_Duration = Math.ceil(((calculateTotals(workouts).duration || 0) / (userdetail[0]?.goals?.duration || 1)) * 100);
    }

    // const Var_Calories = Math.ceil(((calculateTotals(workouts).calories)/(userdetail[0].goals.calories))*100)
    // const Var_Distance = Math.ceil(((calculateTotals(workouts).distance)/(userdetail[0].goals.distance))*100)
    // const Var_Duration = Math.ceil(((calculateTotals(workouts).duration)/(userdetail[0].goals.duration))*100)

    // const Var_Calories = 18
    // const Var_Distance = 28
    // const Var_Duration = 37




    return (
        <div className="home">
            <Navbar></Navbar>
            <div className='workout-page'>
                <div className='weekly-goal-rings'>

                {/* {userdetail && userdetail.length > 0 && ( */}
                    <div>
                        <h2 className='f-h2-400 pb-5 weekly-goal-rings-header'>My Weekly Goals</h2>
                        <div className='flex flex-wrap justify-around '>
                        <ProgressRing
                        color="text-indigo-400"
                        percentage= {Var_Calories|| 0 }
                        title="Calories"
                        ></ProgressRing>
                        <ProgressRing
                        color="text-lime-400"
                        percentage= {Var_Distance || 0}
                        title="Distance"
                        ></ProgressRing>
                        <ProgressRing
                        color="text-rose-400"
                        percentage= {Var_Duration || 0}
                        title="Effective Duration"
                        ></ProgressRing>
                        </div>                        
                    </div>
                {/* )} */}

                </div>

                <div className='lg:flex gap-8'>

                    <div className='workout-form mt-10'>
                    <WorkoutForm/>                    
                    </div>

                    <div className='workout-detail-table mt-10'>

                        <WorkoutDetailTable workouts = {workouts} />

                    {/* <WorkoutDetailTable></WorkoutDetailTable> */}
                    </div>

                </div>





                {/* <div className="workouts w-auto">
                    {workouts && workouts.map((workout) => (
                        <WorkoutDetail key={workout._id} workout={workout}/>
                    ))}
                </div> */}


            </div>

        </div>
    )
}

export default WorkoutTracker