import { Schema, model } from "mongoose";

const DirectorySchema = new Schema({
  name: String,
});

export default model("directory", DirectorySchema);
