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

    // const { state: userState, dispatch: userDispatch } = useUserContext();
    // const { state: user, dispatch: authDispatch } = useAuthContext();


    useEffect(() => {
    const fetchUser = async () => {
        console.log("render")
        try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/users`, {
            headers: {
            'Authorization': `Bearer ${user.token}`
            }
        });

        if (response.ok) {
            const json = await response.json();
            dispatch({ type: 'GET_USER', payload: json })
            // authDispatch({ type: 'GET_USER', payload: json });
            // userDispatch({ type: 'GET_USER', payload: json });
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

        // dispatch


        const [name, setName] = useState(user ? user.name : '')
        const [email, setEmail] = useState(user ? user.email : '')
        const [error, setError] = useState(null)
        const [emptyFields, setEmptyFields] = useState([])

    
        const handleSubmit = async () => {
            // e.preventDefault()
    
            if(!user){
                setError('You must be logged in')
                return
            }
    
            const userdetail = {name, email}
    
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/users/`,{
                method: 'PATCH',
                body: JSON.stringify(userdetail),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })
    
            const json = await response.json()
    
            if(!response.ok) {
                setError(json.error)
                setEmptyFields(json.emptyFields)
            }
            if(response.ok) {
                setError(null)
                setEmptyFields([])
                console.log('User updated:', json)
                dispatch({type: 'UPDATE_USER', payload: json})
            }
        }



        const [isEditMode, setIsEditMode] = useState(false);
        // const [editedName, setEditedName] = useState(user ? user.name : '');
        // const [editedEmail, setEditedEmail] = useState(user ? user.email : '');
    
        const handleEditToggle = () => {
            setIsEditMode(!isEditMode);
        };
    
        const handleSave = () => {
            // Perform save logic here, update user details on the server if needed
            // For now, just toggle back to view mode
            handleSubmit(name, email)
            setIsEditMode(false);
        };

    return (

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
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Email</label>
                                        <input
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}>
                                        Name
                                        </label>
                                        
                                        <p className="text-md text-gray-800">{name}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}>
                                        Email
                                        </label>
                                        <p className="text-md text-gray-800">{email}</p>
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
                        {error && <div className="error">{error}</div>}
                    </div>
                </div>
            </div>
        );
        };

//     )
// }

export default UserDetail