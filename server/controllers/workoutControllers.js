const Workout = require('../models/workoutModel')
const mongoose = require ('mongoose')


const { startOfDay } = require('date-fns')

// //GET all workouts (this week)
const getWorkouts = async (req, res) => {
    const user_id = req.user._id


    // Calculate start and end dates for the current week (Monday to Sunday)
    const today = new Date();
    const startOfWeek = new Date(today);
    const endOfWeek = new Date(today);

    // // Set to the first day of the week (Monday UTC+8)
    startOfWeek.setDate(today.getDate() - (today.getDay() + 6) % 7);
    startOfWeek.setHours(0, 0, 0, 0); // Set to midnight (00:00:00.000) local time

    // // Set to the last day of the week (Sunday UTC+8)
    endOfWeek.setDate(today.getDate() + (7 - today.getDay()));
    endOfWeek.setHours(23, 59, 59, 999); // Set to 23:59:59.999 (11:59:59.999 PM) local time

    try {
        // Find workouts for the current week
        const workouts = await Workout.find({
            user_id,
            createdAt: {
                $gte: startOfWeek,
                $lte: endOfWeek,
            }
        }).sort({ createdAt: 1 });

        res.status(200).json(workouts);
    } catch (error) {
        console.error('Error fetching workouts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//GET all workouts
// const getWorkouts = async (req, res) => {
//     const user_id = req.user._id

//     const workouts = await Workout.find({ user_id }).sort({createdAt: 1})

//     res.status(200).json(workouts)
// }

//GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
        
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}


//CREATE a new workout
const createWorkout = async (req, res) => {
    const {calories, distance, duration} = req.body

    let emptyFields = []

    if(!calories) {
        emptyFields.push('calories')
    }

    if(!distance) {
        emptyFields.push('distance')
    }

    if(!duration) {
        emptyFields.push('duration')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields!', emptyFields})
    }
        
    try {
        const user_id = req.user._id
        const workout = await Workout.create({calories, distance, duration, user_id})
        res.status(200).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//DELETE a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
        
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

//UPDATE a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
        
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
        })

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}

