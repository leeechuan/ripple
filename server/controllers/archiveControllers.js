// MOCKED DATABASE: Static archived data
const archivedData = [
    { _id: 'a1', user_id: 'mocked_user_id', week: 2, year: 2024, totalCalories: 2500, totalDistance: 35.5, totalDuration: 300, weekEnding: new Date() },
    { _id: 'a2', user_id: 'mocked_user_id', week: 1, year: 2024, totalCalories: 1800, totalDistance: 25.0, totalDuration: 220, weekEnding: new Date() }
];

// Start the archiving process manually
const startManualArchiving = async (req, res) => {
    res.status(200).json({ message: 'Archiving process completed successfully (Mocked)' });
};

// GET archived data for a specific user and week
const getArchivedData = async (req, res) => {
    res.status(200).json(archivedData);
};


module.exports = {
    startManualArchiving,
    getArchivedData
}

