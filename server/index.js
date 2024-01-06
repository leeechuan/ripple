const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const UserModel = require("./models/Users")

const app = express()
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://ripple-admin:ekbTnCPS2H3jmHmj@ripplecluster.etrdyxs.mongodb.net/?retryWrites=true&w=majority")

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


app.listen(3001, ()=> {
    console.log("Server is Running")
})