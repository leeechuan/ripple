const mongoose = require('mongoose')


const Schema = mongoose.Schema
const archiveSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        unique: false,
    },
    totalCalories: {
        type: Number,
        default: 0,
    },
    totalDistance: {
        type: Number,
        default: 0,
    },
    totalDuration: {
        type: Number,
        default: 0,
    },
    week: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Archive', archiveSchema)