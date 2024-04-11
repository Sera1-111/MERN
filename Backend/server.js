require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./Routes/Workouts')
const userRoutes = require ('./Routes/UserRoutes')

// express app
const app = express()

//cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://mern-1-gtmb.onrender.com"); // Allow requests from this origin
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // Allow specified HTTP methods
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization"); // Allow specified headers
  next();
});

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 