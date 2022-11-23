const Todo = require('../models/TodoModel');

module.exports =  async (req, res) => {
    const{ text } = req.body;
    const todo = new Todo({ 
        text,
    })
    await todo.save();
}
