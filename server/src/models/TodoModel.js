const mongoose = require('mongoose');
const { Schema } = mongoose

const todoSchema = new Schema({
    text: {
        type: String, required: true
    },
    completed: {
        type: Boolean
        
    },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;