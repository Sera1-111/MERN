require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./Routes/Workouts')
const userRoutes = require ('./Routes/UserRoutes')
const cors = require('cors');

// express app
const app = express()

//cors
// Use cors middleware with options
app.use(cors({
  origin: 'https://mern-1-gtmb.onrender.com', // Allow requests from this origin
  methods: ['GET', 'PUT', 'POST', 'DELETE'], // Allow specified HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow specified headers
}));


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