const Todo = require("./todoLib");

const getAllTodos = (req, res) => {
    const todos = Todo.getAll();
    res.json(todos);
  };

  const createTodo = (req, res) => {
    const { task, completed, dueDate } = req.body;
  
    const newTodo = Todo.addOne(task, completed, dueDate);
  
    if (newTodo) {
      res.json(newTodo);
    } else {
      res.status(500).json({ message: "Failed to create ToDo" });
    }
  };

  const getTodoById = (req, res) => {
    const Todoid = req.params.todoId;
    const todo = Todo.findById(Todoid);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: 'ToDo not found' });
    }
  };

  const updateTodo = (req, res) => {
    const TodoId = req.params.todoId;
  
    const { task, completed, dueDate } = req.body;
  
    const updatedTodo = Todo.updateOneById(TodoId, { task, completed, dueDate });
  
    if (updatedTodo) {
      res.json(updatedTodo);
    } else {
      res.status(404).json({ message: "ToDo not found" });
    }
  };

  const deleteTodo = (req, res) => {
    const TodoId = req.params.todoId;
  
    const isDeleted = Todo.deleteOneById(TodoId);
  
    if (isDeleted) {
      res.json({ message: "ToDo deleted successfully" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  };

  module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  };