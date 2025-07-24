import { createSlice } from "@reduxjs/toolkit";
import taskData from "../assets/sample-data.json";

const taskSlice = createSlice({
  name: "task",
  initialState: { taskData, searchTerm: "" },
  reducers: {
    addTask: (state, action) => {
      state.taskData.unshift({ _id: Date.now(), ...action.payload });
    },
    deleteTask: (state, action) => {
      state.taskData = state.taskData.filter(
        (item) => item._id !== action.payload
      );
    },
    editTask: (state, action) => {
      const { id, data } = action.payload;
      const index = state.taskData.findIndex((task) => task._id === id);

      if (index !== -1) {
        if (data.title) state.taskData[index].title = data.title;
        if (data.description)
          state.taskData[index].description = data.description;
        if (data.deadline) state.taskData[index].deadline = data.deadline;
        if (data.completed) state.taskData[index].completed = data.completed;
        if (data.important) state.taskData[index].important = data.important;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
