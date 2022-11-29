const mongoose = require('mongoose');
const { Schema } = mongoose

const TodoSchema = new Schema({
    text: {
        type: String, required: true
    },
    completed: {
        type: Boolean,
        
    },
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;