
const express = require('express'); 
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./routes/router');

dotenv.config();

const app = express();

//Middleware

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use(router);

mongoose.connect(process.env.MONGO_URI).then(() => { 
    console.log("connected to Mongo")
app.listen(3030);
})