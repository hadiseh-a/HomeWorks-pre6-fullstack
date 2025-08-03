import express from "express";
import {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  getTasksOfUser,
  verifyUserEmail,
  loginUser,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/authMiddleWare.js";

const router = express.Router();

/**
 * @URL : /api/users
 * @Method : POST
 * @Status : PUBLIC
 * @Description : Create a new user account
 */
router.post("/", createUser);

/**
 * @URL : /api/users
 * @Method : GET
 * @Status : PUBLIC
 * @Description : Retrieve a list of all users
 */
router.get("/", readUsers);

/**
 * @URL : /api/users/:id`
 * @Method : PUT
 * @Status : PUBLIC
 * @Description : Update the details of a specific user (e.g., username, email)
 */
router.put("/:id", updateUser);

/**
 * @URL : /api/users/:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : Remove a specific user from the database
 */
router.delete("/:id", deleteUser);

/**
 * @URL :  /api/users/:id/tasks
 * @Method : GET
 * @Status : PUBLIC
 * @Description : Retrieve all tasks associated with a specific user. The `id` parameter should be the user's unique identifier
 */
router.get("/tasks",authMiddleware, getTasksOfUser);

/**
 * @URL :/api/users/verify/:id/:token
 * @Method : GET
 * @Status : PUBLIC
 * @Description : verify user email
 */
router.get("/verify/:id/:token", verifyUserEmail);

/**
 * @URL :  /api/users/login
 * @Method : GET
 * @Status : PUBLIC
 * @Description : login user
 */
router.get("/login", loginUser);

export default router;
