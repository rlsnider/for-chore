const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const  {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT

connectDB()

const app = express()

//Middleware
app.use(express.static('backend/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todos', require('./routes/todoRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))