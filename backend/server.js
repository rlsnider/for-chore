const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT 

const app = express();

app.use('/api/todos', require('./routes/todoRoutes'))
app.use('/api/todos', require('./routes/todoRoutes'))

app.listen(port, () => console.log(` server listening on port ${port}`));
