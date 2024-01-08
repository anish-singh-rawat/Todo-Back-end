const mongoose = require('mongoose');
const todoScema = new mongoose.Schema({
    text : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('Todo', todoScema)