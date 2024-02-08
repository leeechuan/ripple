const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },    
    dateofbirth:{
        type: String,
        required: false
    },
    nationality: {
        type: String,
        required: false
    },
    emergencycontactname: {
        type: String,
        required: false
    },
    emergencycontactnumber: {
        type: String,
        required: false
    },
    mobilenumber: {
        type: String,
        required: false
    },
    homenumber: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    goals: {
        type: {
            calories: {
                type: Number,
                required: false
            },
            distance: {
                type: Number,
                required: false
            },
            duration: {
                type: Number,
                required: false
            }
        },
        required: false
    },
    resetPasswordToken: {
        type: String,
        required: false
    }

})

//Static signup method

userSchema.statics.signup = async function(email, password) {

    //Validation
    if (!email || !password) {
        throw Error('Please fill in all fields!')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough')
    }


    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email is already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({ email, password: hash })

    return user

}

//Static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('Please fill in all fields!')
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw Error('Invalid Login Credentials')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user


}

module.exports = mongoose.model('User', userSchema)