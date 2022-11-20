const mongoose = require('mongoose');

const MongoSchema = new mongoose.Schema({

    text:{
        type:String,
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

const Schema = mongoose.model('User', MongoSchema);

module.exports = Schema;