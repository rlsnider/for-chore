const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');

const readTodosRoute = require('./readTodosRoute');
const createTodoRoute = require('./createTodoRoute');
const updateTodoRoute = require('./updateTodoRoute');
const deleteTodoRoute = require('./deleteTodoRoute');

const router = express.Router();

router.post('/login', require('./loginRoute'));
 
router.get('/todos', isLoggedIn, readTodosRoute);
router.post('/todos', isLoggedIn, createTodoRoute);
router.put('/todos/:id', isLoggedIn, updateTodoRoute); 
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);
//delete route

module.exports = router;