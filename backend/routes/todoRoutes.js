const express = require('express');
const router = express.Router();
// fetch controller
const { createTodo, updateTodo, deleteTodo, getTodo, getOneTodo } = require("../controllers/todoHandler");
// mount the controller
router.post('/createTodo', createTodo);
router.patch('/updateTodo/:id', updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.get('/getTodo', getTodo);
router.get('/getOneTodo/:id', getOneTodo);

module.exports = router;
