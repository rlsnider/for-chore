
//DEPENDENCIES
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./router')

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use(router);


mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(3030);
    console.log("Connected to Mongo");
})
