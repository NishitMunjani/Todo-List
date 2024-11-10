const Task = require('../models/Task');

// Get all tasks for a user
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

// Add new task
exports.addTask = async (req, res) => {
  const { text } = req.body;
  const task = new Task({ user: req.user.id, text });
  await task.save();
  res.json(task);
};

// Update a task
exports.updateTask = async (req, res) => {
  const { text, completed } = req.body;
  const task = await Task.findByIdAndUpdate(req.params.id, { text, completed }, { new: true });
  res.json(task);
};

// Delete a task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
};
