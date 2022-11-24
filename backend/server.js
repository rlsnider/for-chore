const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT;

connectDB();

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.use('/api/todos', require('./routes/todoRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(` server listening on port ${port}`));
