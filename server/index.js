const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts.js')
const userRoutes = require('./routes/users.js')
const userdetailRoutes = require('./routes/userdetail.js')
const archiveRoutes = require('./routes/archive.js')
const productRoutes = require('./routes/products.js')
const contactRoutes = require('./routes/contact.js')


// Express app
const app = express()
// app.use(cors())
app.use(cors(
    {
        origin: ["https://theripplegym.vercel.app","http://localhost:5173"],
        methods: ["POST", "GET", "DELETE", "PATCH"],
        credentials: true
    }
))
app.use(express.json());

// // Connect to vercel

// // app.use(cors(
// //     {
// //         origin: ["https://theripplegym.vercel.app/"],
// //         methods: ["POST", "GET"],
// //         credentials: true
// //     }
// // ))


// // Middleware

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// // Routes

app.use('/api/workouts', workoutRoutes)
app.use('/api/users', userRoutes)
app.use('/api/users', userdetailRoutes)
app.use('/api/archive', archiveRoutes)
app.use('/api/products', productRoutes)
app.use('/api/contact', contactRoutes)

// // Connect to DB


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


    app.get("/", (req, res) => {
        res.json("Hello");
    })