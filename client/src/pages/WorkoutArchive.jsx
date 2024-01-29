import { useEffect, useState } from 'react'
// import { useWorkoutsContext } from '../hooks/useWorkoutContext'
// import { useUserContext } from '../hooks/useUserContext'
import { useAuthContext } from '../hooks/useAuthContext'
// import WorkoutForm from '../components/workoutform'
import Navbar from '../components/Navbar'

import ReactLoading from 'react-loading'
import 'rsuite/DatePicker/styles/index.css';
import WorkoutArchiveTable from '../components/workoutarchivetable'


const WorkoutArchive = () => {

    const { user } = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const [archive, setArchive] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [postarchiveResponse, archiveResponse] = await Promise.all([

                    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/archive`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        }
                    }),
                    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/archive`, {
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        }
                    }),
                ]);

                const archiveJson = await archiveResponse.json()
                setArchive(archiveJson)

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (user && isLoading) {
            fetchData();
        }
        // userdispatch, workoutdispatch, user, userdetail,isLoading
    }, [isLoading, user]);


    return (
        <div className="home">
            <Navbar></Navbar>
            {!isLoading ?
            <div className='workoutarchive-page'>

                <WorkoutArchiveTable
                archive = {archive}
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