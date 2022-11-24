const asyncHandler = require('express-async-handler');
const { request } = require('http');

const Todo = require('../models/todoModel')

//get Todos
//route - GET /api/todos
const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find();
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
        text: req.body.text
    })
    res.status(200).json(todo)
})
//update Todo
//route - PUT /api/todos/:id
const updateTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    if(!todo) {
        res.status(400) 
        throw new Error('Todo not found')
    }
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedTodo)
})
//delete Todo
//route - DELETE /api/todos
const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    if(!todo) {
        res.status(400)
        throw new Error('Todo not found')
    }
    
    await todo.remove();

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}