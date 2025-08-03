import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const { body } = req;
    const createdTask = await Task.create(body);
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const readTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatedTask = await Task.findByIdAndUpdate(id, {...body,_id:id}, { new: true });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const deletedTask = await Task.findByIdAndDelete(id);
    res.status(202).json(deletedTask);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
