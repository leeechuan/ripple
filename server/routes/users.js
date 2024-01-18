const express = require('express')

const {
    loginUser,
    signupUser,
} = require('../controllers/userControllers')

const router = express.Router()


// LOGIN route
router.post('/login', loginUser)

// SIGN UP route
router.post('/signup', signupUser)


module.exports = router