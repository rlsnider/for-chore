const express = require('express');
const router = express.Router();


 router.get('/todos', require('./routes/readTodosRoute'))
 router.post('/todos', require('./routes/createTodoRoute'))



// router.put('/todos/:id', (req, res) => { 
//     console.log('todo put route')
// })

// //Delete a todo
// router.delete('/todos/:id', (req, res) => {
//     console.log('todos delete route')
// })

module.exports = router;



