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
});

export default model("Task", TaskSchema);
