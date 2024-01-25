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

    const { user } = useAuthContext();
    const { dispatch: userDispatch } = useUserContext();
  
    const [firstname, setFirstName] = useState(user ? user.firstname : '');
    const [lastname, setLastName] = useState(user ? user.lastname : '');
    const [gender, setGender] = useState(user ? user.gender : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [dateofbirth, setDateOfBirth] = useState(user ? user.dateofbirth : '');
    const [nationality, setNationality] = useState(user ? user.nationality : '');
    const [emergencycontactname, setEmergencyContactName] = useState(user ? user.emergencycontactname : '');
    const [emergencycontactnumber, setEmergencyContactNumber] = useState(user ? user.emergencycontactnumber : '');
    const [mobilenumber, setMobileNumber] = useState(user ? user.mobilenumber : '');
    const [homenumber, setHomeNumber] = useState(user ? user.homenumber : '');
    const [goals, setGoals] = useState({
      calories: user && user.goals ? user.goals.calories : 0, 
      distance: user && user.goals ? user.goals.distance : 0,
      duration: user && user.goals ? user.goals.duration : 0
    });
    const [error, setError] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [emptyFields, setEmptyFields] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/users`, {
            headers: {
              'Authorization': `Bearer ${user.token}`
            }
          });
  
          if (response.ok) {
            const json = await response.json();
            userDispatch({ type: 'GET_USER', payload: json });


            //Update States
            setFirstName(json[0].firstname)
            setLastName(json[0].lastname)
            setGender(json[0].gender)
            setEmail(json[0].email)
            setDateOfBirth(json[0].dateofbirth)
            setNationality(json[0].nationality)
            setEmergencyContactName(json[0].emergencycontactname)
            setEmergencyContactNumber(json[0].emergencycontactnumber)
            setMobileNumber(json[0].mobilenumber)
            setHomeNumber(json[0].homenumber)
            setGoals({
              calories: json[0]?.goals?.calories || 0,
              distance: json[0]?.goals?.distance || 0,
              duration: json[0]?.goals?.duration || 0
            })


          } else {
            console.error('Error fetching user:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };
  
      if (user) {
        fetchUser();
      }
    }, [user, userDispatch]);
  
    const handleSubmit = async () => {
      if (!user) {
        setError('You must be logged in');
        return;
      }
  
      const userDetail = { 
        firstname,
        lastname,
        gender,
        email,
        dateofbirth,
        nationality,
        emergencycontactname,
        emergencycontactnumber,
        mobilenumber,
        homenumber,
        goals
       };
  
      try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/users/`, {
          method: 'PATCH',
          body: JSON.stringify(userDetail),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        });
  
        const json = await response.json();
  
        if (!response.ok) {
          setError(json.error);
          setEmptyFields(json.emptyFields);
        } else {
          setError(null);
          setEmptyFields([]);
          console.log('User updated:', json);
          userDispatch({ type: 'UPDATE_USER', payload: json });
        }
      } catch (error) {
        console.error('Error updating user:', error);
      }
    };
  
    const handleEditToggle = () => {
      setIsEditMode(!isEditMode);
    };
  
    const handleSave = () => {
      handleSubmit();
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
                                        <label className="block text-sm font-medium text-gray-600">First Name</label>
                                        <input
                                            type="text"
                                            value={firstname}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Last Name</label>
                                        <input
                                            type="text"
                                            value={lastname}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Gender</label>
                                        <input
                                            type="text"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
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
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Date Of Birth</label>
                                        <input
                                            type="text"
                                            value={dateofbirth}
                                            onChange={(e) => setDateOfBirth(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Nationality</label>
                                        <input
                                            type="text"
                                            value={nationality}
                                            onChange={(e) => setNationality(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Emergency Contact Name</label>
                                        <input
                                            type="text"
                                            value={emergencycontactname}
                                            onChange={(e) => setEmergencyContactName(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Emergency Contact Number</label>
                                        <input
                                            type="text"
                                            value={emergencycontactnumber}
                                            onChange={(e) => setEmergencyContactNumber(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Mobile Number</label>
                                        <input
                                            type="text"
                                            value={mobilenumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Home Number</label>
                                        <input
                                            type="text"
                                            value={homenumber}
                                            onChange={(e) => setHomeNumber(e.target.value)}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Calories</label>
                                        <input
                                            type="text"
                                            value={goals.calories}
                                            onChange={(e) => setGoals({...goals, calories: e.target.value})}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Distance</label>
                                        <input
                                            type="text"
                                            value={goals.distance}
                                            onChange={(e) => setGoals({...goals, distance: e.target.value})}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600">Duration</label>
                                        <input
                                            type="text"
                                            value={goals.duration}
                                            onChange={(e) => setGoals({...goals, duration: e.target.value})}
                                            className="text-md text-gray-800 border rounded-md p-2 w-full"
                                        />
                                    </div>
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

                              // Not editable section
                                <div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        value={firstname}>
                                        First Name
                                        </label>
                                        <p className="text-md text-gray-800">{firstname}</p>
                                    </div>                          
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastname}>
                                        Last Name
                                        </label>
                                        <p className="text-md text-gray-800">{lastname}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setGender(e.target.value)}
                                        value={gender}>
                                        Gender
                                        </label>
                                        <p className="text-md text-gray-800">{gender}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}>
                                        Email
                                        </label>
                                        <p className="text-md text-gray-800">{email}</p>
                                    </div>                              
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                        value={dateofbirth}>
                                        Date Of Birth
                                        </label>
                                        <p className="text-md text-gray-800">{dateofbirth}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setNationality(e.target.value)}
                                        value={nationality}>
                                        Nationality
                                        </label>
                                        <p className="text-md text-gray-800">{nationality}</p>
                                    </div>                          
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setEmergencyContactName(e.target.value)}
                                        value={emergencycontactname}>
                                        Emergency Contact Name
                                        </label>
                                        <p className="text-md text-gray-800">{emergencycontactname}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setEmergencyContactNumber(e.target.value)}
                                        value={emergencycontactnumber}>
                                        Emergency Contact Number
                                        </label>
                                        <p className="text-md text-gray-800">{emergencycontactnumber}</p>
                                    </div>                       
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                        value={mobilenumber}>
                                        Mobile Number
                                        </label>
                                        <p className="text-md text-gray-800">{mobilenumber}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setHomeNumber(e.target.value)}
                                        value={homenumber}>
                                        Home Number
                                        </label>
                                        <p className="text-md text-gray-800">{homenumber}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setGoals({...goals, calories: e.target.value})}
                                        value={goals.calories}>
                                        Calories
                                        </label>
                                        <p className="text-md text-gray-800">{goals.calories}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setGoals({...goals, distance: e.target.value})}
                                        value={goals.distance}>
                                        Distance
                                        </label>
                                        <p className="text-md text-gray-800">{goals.distance}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-600"
                                        onChange={(e) => setGoals({...goals, duration: e.target.value})}
                                        value={goals.duration}>
                                        Duration
                                        </label>
                                        <p className="text-md text-gray-800">{goals.duration}</p>
                                    </div>
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