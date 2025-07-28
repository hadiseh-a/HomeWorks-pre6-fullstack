import "dotenv/config";
import express from "express";
import cors from "cors";
import { logger } from "./middlewares/logger";

const PORT = 5000;

const app = express();

app.use(logger, cors(), express.json(), express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
