import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
  important: Boolean,
  deadline: Date,
  dirId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Directory",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
    uniqued: true,
  },
});

export default model("Task", TaskSchema);
