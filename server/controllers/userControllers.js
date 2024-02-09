const User = require('../models/userModel')
const mongoose = require ('mongoose')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt')

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
        user.firstname = req.body.firstname || user.firstname
        user.lastname = req.body.lastname || user.lastname
        user.gender = req.body.gender || user.gender
        user.email = req.body.email || user.email
        user.dateofbirth = req.body.dateofbirth || user.dateofbirth
        user.nationality = req.body.nationality || user.nationality
        user.emergencycontactname = req.body.emergencycontactname || user.emergencycontactname
        user.emergencycontactnumber = req.body.emergencycontactnumber || user.emergencycontactnumber
        user.mobilenumber = req.body.mobilenumber || user.mobilenumber
        user.homenumber = req.body.homenumber || user.homenumber
        user.goals = req.body.goals || user.goals

        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            firstname: updatedUser.firstname,
            lastname: updatedUser.lastname,
            gender: updatedUser.gender,
            email: updatedUser.email,
            dateofbirth: updatedUser.dateofbirth,
            nationality: updatedUser.nationality,
            emergencycontactname: updatedUser.emergencycontactname,
            emergencycontactnumber: updatedUser.emergencycontactnumber,
            mobilenumber: updatedUser.mobilenumber,
            homenumber: updatedUser.homenumber,
            goals: updatedUser.goals
            // token: createToken(updatedUser._id)
        });
    } else {
        res.status(404);
        throw new Error("User not found")
    }


}


//UPDATE a user password
const updatePassword = async (req, res) => {

    const user = await User.findById(req.body.userId);

    console.log(user, "---user")
    console.log(req.body.userId, "---req.userId")

    if(user){
        // Hash the new password before saving
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password,salt)
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        user.password = hash;

        const updatedUser = await user.save({ email: user.email , password: hash })

        res.json({
            _id: updatedUser._id,
        });
    } else {

        res.status(404);
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


//Forgot Password

const forgotPassword = async (req, res) => {
    try {
        const isProduction = process.env.NODE_ENV === 'production'
        const {email} = req.body

        User.findOne({email:email})
        .then (user => {
            if(!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            const token = jwt.sign({id: user._id}, "jwt_secret_key_ripple", {expiresIn: "1h"})

            const transporter = nodemailer.createTransport({
                // host: "Gmail",
                // port: 465,
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                // secure: true,
                auth: {
                  // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                  user: "lccodingprojects@gmail.com",
                  pass: process.env.SMTP_PASSWORD,
                },
                tls: {
                    ciphers: 'SSLv3'
                }
              });
              
              const info = {
                from: '"The Ripple Gym" <admin-donotreply@ripple.com>', // sender address
                to: "aleechuan@gmail.com",
                subject: "Reset Password Link", // Subject line
                text: "this is a test message", // plain text body
                html: `<b>${isProduction ? "https://theripplegym.vercel.app" : "http://localhost:5173"}/resetpassword/${token}</b>`, // html body
              };


              transporter.sendMail(info, function(error,info){
                if(error) { 
                    console.log(error)
                    return res.status(500).json({ error: 'Internal server error' });
                } else { 
                    user.resetPasswordToken = token;
                    user.save()
                    return res.status(200).json({ status: 'Success' });
                }
              })
        })

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// VerifyLink

const verifyLink = async (req, res) => {
    const resetPasswordToken = req.body.token; // Extracted from reset password link
    // const { userId, isExpired, error } = verifyLink(resetPasswordToken);
    console.log (resetPasswordToken)

    try {
        const decoded = jwt.verify(resetPasswordToken, "jwt_secret_key_ripple");
        const { id, exp } = decoded;

        // Check if token has expired
        const isExpired = Date.now() >= exp * 1000;

        console.log("User ID:", id);
        console.log("Is expired:", isExpired);

        if (isExpired) {
            return res.status(400).json({ error: 'Token has expired' });
        }

        return res.status(200).json({ userId: id, isExpired });
    } catch (error) {
        // JWT verification failed (e.g., invalid token)
        return res.status(500).json({ error: 'Internal server error' });
    }
}







module.exports = {
    loginUser,
    signupUser,
    getUserDetail,
    updateUserDetail,
    forgotPassword,
    verifyLink,
    updatePassword
}

