// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// require('dotenv').config()
// const workoutRoutes = require('./routes/workouts.js')
// const userRoutes = require('./routes/users.js')
// const userdetailRoutes = require('./routes/userdetail.js')


// // Express app
// const app = express()
// // app.use(cors())
// app.use(cors(
//     {
//         origin: ["https://theripplegym.vercel.app"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ))
// app.use(express.json());

// // // Connect to vercel

// // // app.use(cors(
// // //     {
// // //         origin: ["https://theripplegym.vercel.app/"],
// // //         methods: ["POST", "GET"],
// // //         credentials: true
// // //     }
// // // ))


// // // Middleware

// // app.use((req, res, next) => {
// //     console.log(req.path, req.method)
// //     next()
// // })


// // // Routes

// // app.use('/api/workouts', workoutRoutes)
// // app.use('/api/users', userRoutes)
// // app.use('/api/users', userdetailRoutes)


// // // Connect to DB


// // const dotenv = require('dotenv');
// // dotenv.config();

// // const isProduction = process.env.NODE_ENV === 'production';

// // // Use the appropriate MongoDB URI based on the environment
// // const mongoURI = isProduction ? process.env.MONGO_URI_PROD : process.env.MONGO_URI;

// // // Now use `mongoURI` to connect to the MongoDB database
// // mongoose.connect(mongoURI)
// //     .then(() => {
// //         console.log('Connected to MongoDB');
// //         app.listen(process.env.PORT, () => {
// //             console.log('Server is running on port', process.env.PORT);
// //         });
// //     })
// //     .catch((error) => {
// //         console.error('Error connecting to MongoDB:', error);
// //     });


// //     app.get("/", (req, res) => {
// //         res.json("Hello");
// //     })


// mongoose.connect('mongodb+srv://ripple-admin:ekbTnCPS2H3jmHmj@ripplecluster.etrdyxs.mongodb.net/ripple-dev?retryWrites=true&w=majority');


// app.get("/", (req, res) => {
//     res.json("Hello");
// })

// app.listen(3001, () => {
//     console.log("Server is Running")
// })





const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./models/Register')

const app = express()
app.use(cors(
    {
        origin: ["https://deploy-mern-test-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect('mongodb+srv://ripple-admin:ekbTnCPS2H3jmHmj@ripplecluster.etrdyxs.mongodb.net/corstesting?retryWrites=true&w=majority');


app.get("/", (req, res) => {
    res.json("Hello");
})
// app.post('/register', (req, res) => {
//     const {name, email, password} = req.body;
//     RegisterModel.findOne({email: email})
//     .then(user => {
//         if(user) {
//             res.json("Already have an account")
//         } else {
//             RegisterModel.create({name: name, email: email, password: password})
//             .then(result => res.json(result))
//             .catch(err => res.json(err))
//         }
//     }).catch(err => res.json(err))
// })


app.listen(3001, () => {
    console.log("Server is Running")
})
