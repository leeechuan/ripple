const User = require('../models/userModel')
const mongoose = require ('mongoose')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d' })
}

//LOGIN user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        //Create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



//SIGNUP user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        //Create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

//GET a single user detail
const getUserDetail = async (req, res) => {
    const user_id = req.user._id

    const users = await User.find({ _id: user_id })


    res.status(200).json(users)
    // const { id } = req.params

    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({error: 'Unable to find user'})
        
    // }

    // const user = await User.findById(id)

    // if(!user){
    //     return res.status(404).json({error: 'Unable to find user'})
    // }

    // res.status(200).json(user)
}

//UPDATE a user detail
const updateUserDetail = async (req, res) => {
    // const { id } = req.params

    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({error: 'No such user'})
        
    // }

    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name
        // user.nationality = req.body.nationality || user.nationality
        user.email = req.body.email || user.email

        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            // token: createToken(updatedUser._id)
        });
    } else {
        res.statue(404);
        throw new Error("User not found")
    }


}

    // const user = await User.findOneAndUpdate({_id: id}, {
    //     ...req.body
    //     }, {new: true})

    // if(!user){
    //     return res.status(404).json({error: 'No such user'})
    // }

    // res.status(200).json(user)






module.exports = {
    loginUser,
    signupUser,
    getUserDetail,
    updateUserDetail
}

