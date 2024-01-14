const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts.js')
// const UserModel = require("./models/Users")


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

// app.get('/', (req, res) => {
//     res.json({msg: "welcome"})
// })

app.use('/api/workouts', workoutRoutes)







// Connect to DB

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected and listening on port', process.env.PORT)
        })
    })
    .catch((error) =>{
        console.log(error)
    })





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


