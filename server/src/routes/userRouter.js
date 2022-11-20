

const UserModel = require('../models/UserModel');

module.exports = async (req, res) => {
    const {text} = req.body;
    const todo = new UserModel({
        text,
        email,
        password
    })
    const newTodo = await todo.save();
    res.json(newTodo)
};