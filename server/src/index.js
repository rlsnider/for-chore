const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan')

console.log(process.env.MONGO_URI);
const app = express();

//MIddleware
app.use(morgan('tiny'));


//Read / Get route
app.get('/todos', (req, res) => {
    res.send('Read/Get request!');
});

app.listen(3030);