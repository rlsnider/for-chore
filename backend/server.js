const path = require('path');
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

//Middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Routes
app.use('/api/todos', require('./routes/todoRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// //Serve frontend
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));

//     app.get ('*', (req, res) => 
//         res.sendFile(
//             path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')    
//         )
//     );
//  } else {
//     app.get('/', (req, res) => res.send('please set to production'));
//  }


//Custom Error Handler(see Middleware)
app.use(errorHandler);

app.listen(port, () => console.log(` server listening on port ${port}`));
