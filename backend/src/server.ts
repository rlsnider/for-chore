import express from'express';
import * as dotenv from 'dotenv';
dotenv.config();
import colors from'colors';
import {connectDB} from './config/db';
import errorHandler from './middleware/errorMiddleware';
const port = process.env.PORT;

connectDB();

const app = express();

//Middleware
app.use(express.static('backend/public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todos', require('./routes/todoRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))