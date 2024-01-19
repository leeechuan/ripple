const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    calories: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Workout', workoutSchema)

