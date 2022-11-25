const asyncHandler = require('express-async-handler');

const Todo = require('../models/todoModel')
const User = require('../models/userModel')
//get Todos
//route - GET /api/todos
const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find({ user: req.user.id });

    res.status(200).json(todos)
})
//create Todo
//route - POST /api/todos
const createTodo = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a chore')
    }
    const todo = await Todo.create({
        text: req.body.text,
        user: req.user.id,
    })
    res.status(200).json(todo)
})
//update Todo
//route - PUT /api/todos/:id
const updateTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    //Check for todo
    if(!todo) {
        res.status(400) 
        throw new Error('Todo not found')
    }
    //check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    //make sure user matches todo
    if(todo.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    //update todo
const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
})
    res.status(200).json(updatedTodo)
})
//delete Todo
//route - DELETE /api/todos
const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    //Check for todo
    if(!todo) {
        res.status(400)
        throw new Error('Todo not found')
    }
    //check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    //make sure the user matches the todo user
    if (todo.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    //remove todo
    await todo.remove();

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}