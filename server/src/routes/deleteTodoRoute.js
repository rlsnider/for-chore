
const TodoModel = require('../models/TodoModel')

module.exports =  async (req, res) => {
    const {id} = req.params;
    const todo = await TodoModel.findById(id);
    todo.text = req.body.text;
    await todo.remove();

    res.status(204).json(todo);

}
    