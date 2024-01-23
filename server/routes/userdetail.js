const express = require('express')

const {
    getUserDetail,
    updateUserDetail
} = require('../controllers/userControllers')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Require auth fot all user detail
router.use(requireAuth)


// GET user detail
router.get('/', getUserDetail)

// UPDATE a user detail
router.patch('/:id', updateUserDetail)


module.exports = router