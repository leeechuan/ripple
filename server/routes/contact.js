const express = require('express')

const {
    sendContactUs
} = require('../controllers/contactControllers')

const router = express.Router()


// LOGIN route
router.post('/', sendContactUs)


module.exports = router