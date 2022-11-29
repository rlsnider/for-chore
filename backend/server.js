const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT 

connectDB()

const app = express()

//Middleware 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./routes/todoRoutes'))
app.use('/api/users', require('./routes/userRoutes'))



app.listen(port, () => console.log(`Server listening on port ${port}`))