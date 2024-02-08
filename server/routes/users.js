const express = require('express')

const {
    loginUser,
    signupUser,
    forgotPassword,
    verifyLink,
} = require('../controllers/userControllers')

const router = express.Router()


// LOGIN route
router.post('/login', loginUser)

// SIGN UP route
router.post('/signup', signupUser)

// FORGOT password
router.post('/forgotpassword', forgotPassword)

// VERIFY link
router.post('/verifylink', verifyLink)


module.exports = router