const asyncHandler = require('express-async-handler')
const Todo = require('../models/todoModel')
const User = require('../models/userModel')

//Get Todos route GET /api/todos
const getTodos = asyncHandler(async(req, res) => {
    const todos = await Todo.find({user: req.user.id})
    res.status(200).json(todos)
})


//Create Todo route POST /api/todos/
const createTodo = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a Chore to do')
    }
    const todo = await Todo.create({
        text: req.body.text,
        user: req.user.id
    }) 
    res.status(200).json(todo)
})

//Update Todos route PUT /api/todos/:id
const updateTodo = asyncHandler(async(req, res) => {
    const todo = await Todo.findById(req.params.id)

    if(!todo) {
        res.status(400)
        throw new Error('Chore not found')
    }
    
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    
    if(todo.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('You are not authorized')

    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, 
        {new: true,}
    )
    res.status(200).json(updatedTodo)
    })

//Delete Todo route DELETE /api/todos/:id
const deleteTodo = asyncHandler(async(req, res) => {
    const todo = await Todo.findById(req.params.id)

    if(!todo) {
        res.status (400)
        throw new Error('Chore was not found')
    }

    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (todo.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('You are not authorized')
    }
    await todo.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
}