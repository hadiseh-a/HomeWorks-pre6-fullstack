import express from "express";
import {
  createDirectory,
  readDirectories,
  readTasksByDirectory,
  updateDirectory,
  deleteDirectory,
} from "../controllers/directory.controller.js";

const router = express.Router();

/**
 * @URL : /api/directories
 * @Method : POST
 * @Status : PUBLIC
 * @Description : Add a new directory
 */
router.post("/", createDirectory);

/**
 * @URL : /api/directories
 * @Method : GET
 * @Status : PUBLIC
 * @Description : Retrieve a list of all directories
 */
router.get("/", readDirectories);

/**
 * @URL :  /api/directories/:dirId/tasks
 * @Method : GET
 * @Status : PUBLIC
 * @Description : Retrieve all tasks for a specific directory
 */
router.get("/tasks", readTasksByDirectory);

/**
 * @URL : /api/directories/:id
 * @Method : PUT
 * @Status : PUBLIC
 * @Description : Update the name of a specific directory
 */
router.put("/:id", updateDirectory);

/**
 * @URL : /api/directories/:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : Delete a specific directory
 */
router.delete("/:id", deleteDirectory);

export default router;
