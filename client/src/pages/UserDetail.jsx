import { useEffect, useState } from 'react'
// import { useWorkoutsContext } from '../hooks/useWorkoutContext'
import { useUserContext } from '../hooks/useUserContext'
import { useAuthContext } from '../hooks/useAuthContext'
// import WorkoutForm from '../components/workoutform'
import Navbar from '../components/Navbar'
import '../styles/userdetail.css'
import { DatePicker } from 'rsuite';
import 'rsuite/DatePicker/styles/index.css';
import ReactLoading from 'react-loading'





const UserDetail = () => {



    const { user } = useAuthContext();
    const { dispatch: userDispatch } = useUserContext();
    const [ isLoading, setIsLoading ] = useState(true)

        // Set actual states
  
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

        // Set temporary states

        const [tfirstname, settFirstName] = useState(user ? user.firstname : '');
        const [tlastname, settLastName] = useState(user ? user.lastname : '');
        const [tgender, settGender] = useState(user ? user.gender : '');
        const [temail, settEmail] = useState(user ? user.email : '');
        const [tdateofbirth, settDateOfBirth] = useState(user ? user.dateofbirth : '');
        const [tnationality, settNationality] = useState(user ? user.nationality : '');
        const [temergencycontactname, settEmergencyContactName] = useState(user ? user.emergencycontactname : '');
        const [temergencycontactnumber, settEmergencyContactNumber] = useState(user ? user.emergencycontactnumber : '');
        const [tmobilenumber, settMobileNumber] = useState(user ? user.mobilenumber : '');
        const [thomenumber, settHomeNumber] = useState(user ? user.homenumber : '');
        const [tgoals, settGoals] = useState({
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
            const[day, month, year] = json[0].dateofbirth.split('/').map(Number)
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

            settFirstName(json[0].firstname)
            settLastName(json[0].lastname)
            settGender(json[0].gender)
            settEmail(json[0].email)
            
            settDateOfBirth(new Date(year, month-1, day))
            settNationality(json[0].nationality)
            settEmergencyContactName(json[0].emergencycontactname)
            settEmergencyContactNumber(json[0].emergencycontactnumber)
            settMobileNumber(json[0].mobilenumber)
            settHomeNumber(json[0].homenumber)
            settGoals({
              calories: json[0]?.goals?.calories || 0,
              distance: json[0]?.goals?.distance || 0,
              duration: json[0]?.goals?.duration || 0
            })

            setIsLoading(false)


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
        firstname: tfirstname,
        lastname: tlastname,
        gender: tgender,
        email: temail,
        dateofbirth: tdateofbirth.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }),
        nationality: tnationality,
        emergencycontactname: temergencycontactname,
        emergencycontactnumber: temergencycontactnumber,
        mobilenumber: tmobilenumber,
        homenumber: thomenumber,
        goals: tgoals
       };
       console.log(userDetail, "---check this")
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
      
      //Reset temp states
      settFirstName(firstname)
      settLastName(lastname)
      settGender(gender)
      settEmail(email)
      const[day, month, year] = dateofbirth.split('/').map(Number)
      settDateOfBirth(new Date(year, month-1, day))
      settNationality(nationality)
      settEmergencyContactName(emergencycontactname)
      settEmergencyContactNumber(emergencycontactnumber)
      settMobileNumber(mobilenumber)
      settHomeNumber(homenumber)
      settGoals({
        calories: goals?.calories || 0,
        distance: goals?.distance || 0,
        duration: goals?.duration || 0
      })



    };
  
    const handleSave = () => {
      handleSubmit();
      


      //Save over from temp to actual state
      setFirstName(tfirstname)
      setLastName(tlastname)
      setGender(tgender)
      setEmail(temail)
      setDateOfBirth(tdateofbirth.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }))
      setNationality(tnationality)
      setEmergencyContactName(temergencycontactname)
      setEmergencyContactNumber(temergencycontactnumber)
      setMobileNumber(tmobilenumber)
      setHomeNumber(thomenumber)
      setGoals({
        calories: tgoals?.calories || 0,
        distance: tgoals?.distance || 0,
        duration: tgoals?.duration || 0
      })




      setIsEditMode(false);
    };






    
    return (

                <div className="home">
                <Navbar></Navbar>
                {! isLoading ?
                <div>

                <div className='userdetail-page'>
                    <div className="min-h-screen ">
                        <div className="mt-8 p-8 bg-white shadow-md rounded-md">
                            <h1 className="text-2xl font-semibold mb-4">User Details</h1>
                            {isEditMode ? (
                                <div>
                                <div className="userdetail-form">
                                    <div className="mb-4">
                                        <label className="label-container">First Name</label>
                                        <input
                                            type="text"
                                            value={tfirstname}
                                            onChange={(e) => settFirstName(e.target.value)}
                                            className="input-container"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container">Last Name</label>
                                        <input
                                            type="text"
                                            value={tlastname}
                                            onChange={(e) => settLastName(e.target.value)}
                                            className="input-container"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container">Gender</label>
                                        <select id="gender" 
                                        value={tgender}
                                        onChange={(e) => settGender(e.target.value)}
                                        className="input-container cursor-pointer">
                                            <option selected>Choose a gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container">Email</label>
                                        <input
                                            type="text"
                                            value={temail}
                                            onChange={(e) => settEmail(e.target.value)}
                                            className="input-container"
                                        />
                                    </div>
                                    <div className="mb-4 dob-datepicker">
                                        <label className="label-container">Date Of Birth</label>
                                        <DatePicker
                                            value={tdateofbirth}
                                            hideHours={true}
                                            hideMinutes={true}
                                            hideSeconds={true}
                                            onChange={(value) => settDateOfBirth(value)}
                                        />
                                    </div>
                                    
                                    <div className="mb-4">
                                        <label className="label-container">Nationality</label>
                                        <input
                                            type="text"
                                            value={tnationality}
                                            onChange={(e) => settNationality(e.target.value)}
                                            className="input-container"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container">Emergency Contact Name</label>
                                        <input
                                            type="text"
                                            value={temergencycontactname}
                                            onChange={(e) => settEmergencyContactName(e.target.value)}
                                            className="input-container"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container">Emergency Contact Number</label>
                                        <input
                                            type="text"
                                            value={temergencycontactnumber}
                                            onChange={(e) => settEmergencyContactNumber(e.target.value)}
                                            className="input-container"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container">Mobile Number</label>
                                        <input
                                            type="text"
                                            value={tmobilenumber}
                                            onChange={(e) => settMobileNumber(e.target.value)}
                                            className="input-container"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container">Home Number</label>
                                        <input
                                            type="text"
                                            value={thomenumber}
                                            onChange={(e) => settHomeNumber(e.target.value)}
                                            className="input-container"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container">Calories</label>
                                        <input
                                            type="text"
                                            value={tgoals.calories}
                                            onChange={(e) => settGoals({...tgoals, calories: e.target.value})}
                                            className="input-container"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container">Distance</label>
                                        <input
                                            type="text"
                                            value={tgoals.distance}
                                            onChange={(e) => settGoals({...tgoals, distance: e.target.value})}
                                            className="input-container"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container">Duration</label>
                                        <input
                                            type="text"
                                            value={tgoals.duration}
                                            onChange={(e) => settGoals({...tgoals, duration: e.target.value})}
                                            className="input-container"
                                        />
                                    </div>

                                </div>

                                <div className='pt-5'>
                                    <button
                                        onClick={handleSave}
                                        className="btn-primary text-default py-2 px-4 rounded-md mr-2"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleEditToggle}
                                        className="bg-gray-500 text-default py-2 px-4 rounded-md"
                                    >
                                        Cancel
                                    </button>                                    
                                </div>

                                </div>                     
                            ) : (

                              // Not editable section
                              <div>
                                <div className="userdetail-form non-editable">
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={firstname}>
                                        First Name
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{firstname}</p>
                                    </div>                          
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={lastname}>
                                        Last Name
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{lastname}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={gender}>
                                        Gender
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{gender}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={email}>
                                        Email
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{email}</p>
                                    </div>                              
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={dateofbirth}>
                                        Date Of Birth
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{dateofbirth}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={nationality}>
                                        Nationality
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{nationality}</p>
                                    </div>                          
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={emergencycontactname}>
                                        Emergency Contact Name
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{emergencycontactname}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={emergencycontactnumber}>
                                        Emergency Contact Number
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{emergencycontactnumber}</p>
                                    </div>                       
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={mobilenumber}>
                                        Mobile Number
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{mobilenumber}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={homenumber}>
                                        Home Number
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{homenumber}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={goals.calories}>
                                        Calories
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{goals.calories}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={goals.distance}>
                                        Distance
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{goals.distance}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-container"
                                        value={goals.duration}>
                                        Duration
                                        </label>
                                        <p className="text-md text-gray-800 font-bold">{goals.duration}</p>
                                    </div>

                                </div>
                                <div className='pt-5'>
                                    <button
                                        onClick={handleEditToggle}
                                        className="btn-primary text-default py-2 px-4 rounded-md">
                                        Edit
                                    </button>   
                                </div>
                             
                            </div>
                            )}
                        </div>
                        {error && <div className="error">{error}</div>}
                    </div>
                </div>
                </div>: 
                
                <div className=''>
                <ReactLoading
                type= "cylon"
                color= "#892929"
                ></ReactLoading>    
                
                </div>}
            </div>
        );
        };

//     )
// }

export default UserDetail