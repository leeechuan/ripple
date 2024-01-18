const express = require('express')

const {
    getUserDetail
} = require('../controllers/userControllers')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Require auth fot all user detail
router.use(requireAuth)


// GET user detail
router.get('/', getUserDetail)


module.exports = router