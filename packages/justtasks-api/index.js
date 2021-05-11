const express = require('express')
const cors = require('cors')
require('dotenv').config()

const {dbConnection} = require('./config/database')

//Create Express server
const app = express()

// DB connection
dbConnection()

// CORS
app.use(cors())

// Public directory
app.use(express.static('public'))

// Read and parse body request
app.use(express.json())

// Routes
app.use('/v1/auth', require('./routes/auth'))
app.use('/v1/tasks', require('./routes/tasks'))

// Listen requests
app.listen(process.env.PORT, () => {
    console.log(`Server listen on port ${process.env.PORT}`)
})