// controllers/todoController.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

// Get single todo
const getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: parseInt(id) },
    });
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todo" });
  }
};

// Create todo
const createTodo = async (req, res) => {
  const { title, description, category, status } = req.body;
  try {
    const todo = await prisma.todo.create({
      data: { title, description, category, status },
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};

// Update todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const todo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: { title, description, completed },
    });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

// Delete todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.todo.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
