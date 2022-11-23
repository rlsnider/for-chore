const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router')

require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

//Middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(router);



//Home Page route
app.get('/', (req, res) => {
    res.send('Welcome to your Chores List')
});



mongoose.connect(process.env.MONGO_URI, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI)})

app.listen(process.env.PORT);