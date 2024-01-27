const express = require('express')
const {
    startManualArchiving,
    getArchivedData
} = require('../controllers/archiveControllers')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Require auth fot all archive routes
router.use(requireAuth)


// GET single user archive
router.get('/', getArchivedData)
router.post('/', startManualArchiving)




module.exports = router