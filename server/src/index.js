const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/router')

require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(router);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => { console.log('connected to mongo: ', process.env.MONGO_URI)})

//Home Page route
app.get('/', (req, res) => {
    res.send('Welcome to your Chores List')
});



app.listen(3030);