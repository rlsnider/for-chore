const express = require('express');
const router = express.Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');


//Read and create a todo
router.route('/').get(getTodos).post(createTodo);

//Edit and delete a todo   
router.route('/:id').put(updateTodo).delete(deleteTodo);

 
module.exports = router