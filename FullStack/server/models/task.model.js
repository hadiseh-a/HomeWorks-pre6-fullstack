import mongoose, { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
  important: Boolean,
  deadline: Date,
  dirId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Directory",
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
    unique: true,
  },
});

export default model("Task", TaskSchema);
