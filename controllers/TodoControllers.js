const TodoModel = require('../models/TodoModel');

module.exports.getTodo = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.send(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports.saveTodo = async (req, res) => {
    try {
        const { text } = req.body;
        await TodoModel.create({ text });
        console.log('Added Successfully');
        res.status(201).send('Todo added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body;
    try {
        await TodoModel.findByIdAndUpdate(_id, { text });
        res.send('Update successfully');
    } catch (err) {
        console.log('Internal update error', err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body;
    try {
        await TodoModel.findByIdAndDelete(_id);
        res.send('Delete successfully');
    } catch (err) {
        console.log('Internal delete error', err);
        res.status(500).send('Internal Server Error');
    }
};