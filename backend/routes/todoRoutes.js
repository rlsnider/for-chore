const express = require('express');
const router = express.Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const {protect} = require('../middleware/authMiddleware')

//Read and create a todo
router.route('/').get(protect, getTodos).post(protect, createTodo);

//Edit and delete a todo   
router.route('/:id').put(protect, updateTodo).delete(protect, deleteTodo);

 
module.exports = router