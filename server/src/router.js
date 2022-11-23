const express = require('express');
const router = express.Router();

const readTodosRoute = require('./routes/readTodosRoute');
const createTodoRoute = require('./routes/createTodoRoute');
const updateTodoRoute = require('./routes/updateTodoRoute');

 router.get('/todos', readTodosRoute);
 router.post('/todos', createTodoRoute);
 router.put('/todos/:id', updateTodoRoute);


// router.put('/todos/:id', (req, res) => { 
//     console.log('todo put route')
// })

// //Delete a todo
// router.delete('/todos/:id', (req, res) => {
//     console.log('todos delete route')
// })

module.exports = router;



