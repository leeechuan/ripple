const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts.js')
const userRoutes = require('./routes/users.js')
const userdetailRoutes = require('./routes/userdetail.js')


// Express app
const app = express()
app.use(cors())
app.use(express.json());

// Connect to vercel

app.use(cors(
    {
        origin: ["https://ripple-frontend-nine.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))


// Middleware

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// Routes

app.use('/api/workouts', workoutRoutes)
app.use('/api/users', userRoutes)
app.use('/api/users', userdetailRoutes)





// Connect to DB


const dotenv = require('dotenv');
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

// Use the appropriate MongoDB URI based on the environment
const mongoURI = isProduction ? process.env.MONGO_URI_PROD : process.env.MONGO_URI;

// Now use `mongoURI` to connect to the MongoDB database
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         app.listen(process.env.PORT, () => {
//             console.log('connected and listening on port', process.env.PORT)
//         })
//     })
//     .catch((error) =>{
//         console.log(error)
//     })


// Example for API for future use


// app.get("/getUsers", (req, res) => {
//     UserModel.find({}).then(function(users) {
//         res.json(users)
//     }).catch(function(err) {
//         res.json(err)
//     })
// })

// app.post("/createUser", async (req, res) => {
//     const user = req.body
//     const newUser = new UserModel(user);
//     await newUser.save();
//     res.json(user);
// })


