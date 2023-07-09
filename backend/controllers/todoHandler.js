const Todo = require("../models/todoModels");

// handler for createtodo
exports.createTodo = async (req, res) => {
    try {
        // fetch the data
        const { title, description } = req.body;
        // push into database
        const response = await Todo.create({
            title, 
            description
        })
        // send response 
        return res.status(200).json({
            success: true,
            message: "Todo created",
            response,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Todo creation failed",
        })
    }
}

// get todo routes
exports.getTodo = async (req, res) => {
    try {   
        const result = await Todo.find({});
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Fetching todo failed",
        })
    }
}

// update todo
exports.updateTodo = async (req, res) => {
    try {
        // fetch the data
        const { id } = req.params;
        const { title, description } = req.body;
        const result = await Todo.findByIdAndUpdate(id, {title, description}, {new: true});
        // return res
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: err.message,
            success: false,
        })
    }
}

// delete todo
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Todo.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "todo deleted successfully",
            result,
        })
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            error: err.message,
        })
    }
}

// getOne todo handler
exports.getOneTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Todo.findById(id);
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false, 
            message: "something error while getting data"
        })
    }
}