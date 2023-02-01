
import Todo from "../models/todoModel";
import User from '../models/userModel';
import { Request, Response } from 'express';

export interface UserInfoRequest extends Request {
  user: any
}

//Get Todos ROUTE: GET /api/todos
const getTodos = (async(req: UserInfoRequest, res: Response)=> {
    const todos = await Todo.find({ user: req.user.id })
    res.status(200).json(todos)
})

//Create Todo ROUTE: POST /api/todos
const createTodo = (async (req: UserInfoRequest, res: Response) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error('Please add a chore')
    }
    
    const todo = await Todo.create({
      text: req.body.text,
      user: req.user.id,
    
    })
  
    res.status(200).json(todo)
  })
//Update todo ROUTE: PUT /api/todos/:id
const updateTodo = (async(req: UserInfoRequest, res: Response) => {
    const todo = await Todo.findById(req.params.id)

    if(!todo) {
        res.status(400)
        throw new Error('Chore not found')
    }
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    if(todo.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorized')
    }
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedTodo)
})
//Delete todo route: DELETE /api/todos/:_id
    const deleteTodo = (async (req: UserInfoRequest, res: Response) => {
    const todo = await Todo.findById(req.params.id)
  
    if (!todo) {
      res.status(400)
      throw new Error('Todo not found')
    }
  
    // Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    // Make todo and user matches
    if (todo.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    await todo.remove()
  
    res.status(200).json({ id: req.params.id })
  })
module.exports = { 
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}