const bcrypt = require('bcryptjs')

//LOGIN user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    res.status(200).json({email, token: "mocked_jwt_token_12345"})
}

//SIGNUP user
const signupUser = async (req, res) => {
    const {email, password} = req.body
    res.status(200).json({email, token: "mocked_jwt_token_12345"})
}

// MOCKED DATABASE: In-memory storage for user data
let mockedUser = {
    _id: 'mocked_user_id',
    firstname: 'John',
    lastname: 'Doe',
    gender: 'Male',
    email: 'john.doe@example.com',
    dateofbirth: '1990-01-01',
    nationality: 'Singaporean',
    emergencycontactname: 'Jane Doe',
    emergencycontactnumber: '98765432',
    mobilenumber: '87654321',
    homenumber: '65432100',
    goals: 'Stay fit and healthy'
};

//GET a single user detail
const getUserDetail = async (req, res) => {
    res.status(200).json([mockedUser])
}

//UPDATE a user detail
const updateUserDetail = async (req, res) => {
    mockedUser = { ...mockedUser, ...req.body };
    res.json(mockedUser);
}


//UPDATE a user password
const updatePassword = async (req, res) => {
    res.json({
        _id: 'mocked_user_id',
        message: 'Password updated successfully (Mocked)'
    });
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

        // MOCKED EMAIL: Bypass database and email service
        const token = "mocked_reset_token"
        
        return res.status(200).json({ 
            status: 'Success', 
            message: `The email feature has been disabled as the site is no longer maintained.`,
            resetLink: `${isProduction ? "https://theripplegym.vercel.app" : "http://localhost:5173"}/resetpassword/${token}`
        });

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// VerifyLink

const verifyLink = async (req, res) => {
    const resetPasswordToken = req.body.token; // Extracted from reset password link

    try {
        // MOCKED VERIFY LINK: Bypass JWT
        // Check if token has expired
        const isExpired = false;

        return res.status(200).json({ userId: "mocked_user_id", isExpired });
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

