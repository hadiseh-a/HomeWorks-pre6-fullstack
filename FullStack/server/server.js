import "dotenv/config";
import express from "express";
import cors from "cors";
import { logger } from "./middlewares/logger.js";
import taskRouter from "./routes/task.route.js";
import directoryRouter from "./routes/directory.route.js";
import { connect } from "mongoose";

const PORT = process.env.PORT || 5050;

const app = express();

app.use(logger, cors(), express.json(), express.urlencoded({ extended: true }));

app.use("/api/tasks", taskRouter);
app.use("/api/directories", directoryRouter);

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("connect to db");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
