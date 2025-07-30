import Directory from "../models/directory.model.js";
import Task from "../models/task.model.js";

export const createDirectory = async (req, res) => {
  try {
    const { body } = req;
    const createdDirectory = await Directory.create(body);
    res.status(201).json(createdDirectory);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const readDirectories = async (req, res) => {
  try {
    const directories = await Directory.find({});
    res.status(200).json(directories);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const readTasksByDirectory = async (req, res) => {
  try {
    const { dirId } = req;
    const tasksOfDirectory = await Task.find({ dirId: dirId });
    res.status(200).json(tasksOfDirectory);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateDirectory = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const updatedDirectory = await Directory.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.status(204).json(updatedDirectory);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const deleteDirectory = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const deletedDirectory = await Directory.findByIdAndDelete(id);
    res.status(204).json(deletedDirectory);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
