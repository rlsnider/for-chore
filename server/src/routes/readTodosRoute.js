
const Todo = require('../models/TodoModel')

module.exports = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
}