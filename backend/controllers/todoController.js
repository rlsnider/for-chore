//get Todos
//route - GET /api/todos
const getTodos = (req, res) => {
    res.status(200).json({message: 'Get api/todos'})
}
//create Todo
//route - POST /api/todos
const createTodo = (req, res) => {
    res.status(200).json({message: 'Post api/todos'})
}
//update Todo
//route - GET /api/todos/:id
const updateTodo = (req, res) => {
    res.status(200).json({message: 'PUT api/todos/:id'})
}
//delete Todo
//route - DELETE /api/todos
const deleteTodo = (req, res) => {
    res.status(200).json({message: 'Delete api/todos/:id'})
}


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}