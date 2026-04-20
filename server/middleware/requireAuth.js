const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const requireAuth = async (req, res, next) => {

    //Verify authentication
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    try {
        // MOCKED AUTH: Bypass JWT verification and database lookup
        req.user = { _id: 'mocked_user_id' }
        next()

    } catch (error) {
        console.log(error)
        res.status (401).json({error: 'Request is not authorized'})
    }

}

module.exports = requireAuth