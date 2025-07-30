import express from "express";
import {
  createTask,
  readTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = express.Router();

/**
 * @URL :/api/tasks
 * @Method : POST
 * @Status : PUBLIC
 * @Description : Add a new task
 */
router.post("/", createTask);

/**
 * @URL : /api/tasks
 * @Method : GET
 * @Status : PUBLIC
 * @Description : Retrieve a list of all tasks
 */
router.get("/", readTasks);

/**
 * @URL : /api/tasks/:id
 * @Method : PUT
 * @Status : PUBLIC
 * @Description : Update details of a specific task (e.g., mark it as completed, change title, etc.).
 */
router.put("/:id", updateTask);

/**
 * @URL : /api/tasks/:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : Delete a specific task
 */
router.delete("/:id", deleteTask);

export default router;
