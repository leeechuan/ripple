const Workout = require('../models/workoutModel')
const Archive = require('../models/archiveModel')
const mongoose = require ('mongoose')
const { startOfDay, endOfDay } = require('date-fns');


// Function to calculate and archive data
const archiveData = async () => {
    try {
        // Get the current date in your local time (UTC+8)
        const today = new Date();
        today.setHours(today.getHours() + 8); // Adjust to UTC+8

        // Calculate the start and end of the week based on your custom definition
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - (today.getDay() + 6) % 7);
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(today);
        endOfWeek.setDate(today.getDate() + (7 - today.getDay()));
        endOfWeek.setHours(23, 59, 59, 999);

        console.log(startOfWeek, "---------", endOfWeek)
        console.log(startOfDay(startOfWeek), "xxxxxxxxxx", endOfDay(endOfWeek))
        console.log(typeof(startOfWeek))
        console.log(typeof(startOfDay(startOfWeek)))

        // Find workouts that are not in the current week
        const workoutsToArchive = await Workout.find({
            createdAt: {
                $lte: startOfWeek,
                // $lte: endOfWeek,
            },
        });

        console.log(workoutsToArchive)

        // Archive the workouts
        await Promise.all(workoutsToArchive.map(async (workout) => {
            const { user_id, calories, distance, duration } = workout;

            // Calculate week based on createdAt date
            const week = workout.createdAt.getWeek();

            // Update totals in the Archive collection
            await Archive.findOneAndUpdate(
                { user_id, week },
                {
                    $inc: {
                        totalCalories: calories,
                        totalDistance: distance,
                        totalDuration: duration,
                    },
                },
                { upsert: true }
            );

            // Remove the workout from the main table
            // await workout.remove();
            await Workout.findOneAndDelete(workout._id);
        }));

        console.log('Archiving process completed successfully');
    } catch (error) {
        console.error('Error during archiving process:', error);
        throw error; // Handle the error appropriately in your application
    }
};





// Function to get the week number from a date
Date.prototype.getWeek = function () {
    const firstDayOfYear = new Date(this.getFullYear(), 0, 1);
    const days = Math.floor((this - firstDayOfYear) / 86400000);
    return Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);
};




// Start the archiving process manually
const startManualArchiving = async (req, res) => {
    try {
        await archiveData();
        res.status(200).json({ message: 'Archiving process completed successfully' });
    } catch (error) {
        console.error('Error during manual archiving:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};





// GET archived data for a specific user and week
const getArchivedData = async (req, res) => {
    try {
        const { user_id, week } = req.query; // Assuming you are passing these as query parameters

        if (!user_id || !week) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        const archivedData = await Archive.findOne({ user_id, week });
        
        if (archivedData) {
            res.status(200).json(archivedData);
        } else {
            res.status(404).json({ error: 'Archived data not found' });
        }
    } catch (error) {
        console.error('Error retrieving archived data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    startManualArchiving,
    getArchivedData
}

