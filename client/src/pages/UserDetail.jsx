import { useEffect, useState } from 'react'
// import { useWorkoutsContext } from '../hooks/useWorkoutContext'
import { useUserContext } from '../hooks/useUserContext'
import { useAuthContext } from '../hooks/useAuthContext'
// import WorkoutForm from '../components/workoutform'
import Navbar from '../components/Navbar'


// import "../styles/workouttracker.css"

// import ProgressRing from '../components/progress-ring'
// import WorkoutDetailTable from '../components/workoutdetailtable'



const UserDetail = () => {
    

    const { dispatch } = useUserContext();
    const { user } = useAuthContext();

    useEffect(() => {
    const fetchUser = async () => {
        try {
        const response = await fetch('https://ripple-backend.vercel.app/api/users', {
            headers: {
            'Authorization': `Bearer ${user.token}`
            }
        });

        if (response.ok) {
            const json = await response.json();
            dispatch({ type: 'GET_USER', payload: json });
        } else {
            // Handle error scenarios
            console.error('Error fetching user:', response.statusText);
        }
        } catch (error) {
        // Handle network or other errors
        console.error('Error fetching user:', error);
        }
        };  if (user) {
            fetchUser();
        }
        
        }, [dispatch, user]);


        const [isEditMode, setIsEditMode] = useState(false);
        const [editedName, setEditedName] = useState(user ? user.name : '');
        const [editedEmail, setEditedEmail] = useState(user ? user.email : '');
    
        const handleEditToggle = () => {
            setIsEditMode(!isEditMode);
        };
    
        const handleSave = () => {
            // Perform save logic here, update user details on the server if needed
            // For now, just toggle back to view mode
            setIsEditMode(false);
        };



    return (
        // <div className="home">
        //     <Navbar></Navbar>
        //     <div className='userdetail-page'>
        //         <div className="min-h-screen bg-gray-100">
        //             <div className="max-w-3xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
        //                 <h1 className="text-2xl font-semibold mb-4">User Details</h1>
        //                     {user ? (
        //                     <div>
        //                         <div className="mb-4">
        //                         <label className="block text-sm font-medium text-gray-600">Name</label>
        //                         <p className="text-md text-gray-800">{"John Doe"}</p>
        //                         </div>
        //                         <div className="mb-4">
        //                         <label className="block text-sm font-medium text-gray-600">Email</label>
        //                         <p className="text-md text-gray-800">{user.email}</p>
        //                         </div>
        //                         {/* Add more user details as needed */}
        //                     </div>
        //                     ) : (
        //                     <p className="text-gray-600">Loading user details...</p>
        //                     )}
        //             </div>
        //         </div>
        //     </div>

        // </div>
                <div className="home">
                <Navbar></Navbar>
                <div className='userdetail-page'>
                    <div className="min-h-screen bg-gray-100">
                        <div className="max-w-3xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
                            <h1 className="text-2xl font-semibold mb-4">User Details</h1>
                            {isEditMode ? (
                                <div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Name</label>
                                        <input
                                            type="text"
                                            value={editedName}
                                            onChange={(e) => setEditedName(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Email</label>
                                        <input
                                            type="text"
                                            value={editedEmail}
                                            onChange={(e) => setEditedEmail(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    {/* Add more editable user details as needed */}
                                    <button
                                        onClick={handleSave}
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleEditToggle}
                                        className="bg-gray-500 text-white py-2 px-4 rounded-md"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Name</label>
                                        <p className="text-md text-gray-800">{editedName}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Email</label>
                                        <p className="text-md text-gray-800">{editedEmail}</p>
                                    </div>
                                    {/* Add more non-editable user details as needed */}
                                    <button
                                        onClick={handleEditToggle}
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md"
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
        };

//     )
// }

export default UserDetail