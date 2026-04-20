// MOCKED DATABASE: In-memory storage for workouts
let workouts = [
    { _id: '1', calories: 350, distance: 5.2, duration: 45, user_id: 'mocked_user_id', createdAt: new Date() },
    { _id: '2', calories: 200, distance: 3.1, duration: 25, user_id: 'mocked_user_id', createdAt: new Date() }
];

// //GET all workouts (this week)
const getWorkouts = async (req, res) => {
    // Return all mocked workouts
    res.status(200).json(workouts);
}

//GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    const workout = workouts.find(w => w._id === id);

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}


//CREATE a new workout
const createWorkout = async (req, res) => {
    const {calories, distance, duration} = req.body

    let emptyFields = []
    if(!calories) emptyFields.push('calories')
    if(!distance) emptyFields.push('distance')
    if(!duration) emptyFields.push('duration')

    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields!', emptyFields})
    }
        
    const workout = {
        _id: Math.random().toString(36).substr(2, 9),
        calories, 
        distance, 
        duration, 
        user_id: req.user._id,
        createdAt: new Date()
    };
    workouts.push(workout);
    res.status(200).json(workout)
}

//DELETE a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    const index = workouts.findIndex(w => w._id === id);

    if(index === -1){
        return res.status(404).json({error: 'No such workout'})
    }

    const deletedWorkout = workouts.splice(index, 1)[0];
    res.status(200).json(deletedWorkout)
}

//UPDATE a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    const index = workouts.findIndex(w => w._id === id);

    if(index === -1){
        return res.status(404).json({error: 'No such workout'})
    }

    workouts[index] = { ...workouts[index], ...req.body };
    res.status(200).json(workouts[index])
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}

