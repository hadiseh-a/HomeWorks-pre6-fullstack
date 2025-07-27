import { createSlice } from "@reduxjs/toolkit";
import taskData from "../assets/sample-data.json";

const taskSlice = createSlice({
  name: "task",
  initialState: { taskData, searchTerm: "", orderBy: "" },
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
        if (typeof data.title !== "undefined")
          state.taskData[index].title = data.title;
        if (typeof data.description !== "undefined")
          state.taskData[index].description = data.description;
        if (typeof data.deadline !== "undefined")
          state.taskData[index].deadline = data.deadline;
        if (typeof data.completed !== "undefined")
          state.taskData[index].completed = data.completed;
        if (typeof data.important !== "undefined")
          state.taskData[index].important = data.important;
      }
    },
    searchTask: (state, action) => {
      state.searchTerm = action.payload.toLowerCase();
    },
    orderTasks: (state, action) => {
      state.orderBy = action.payload.toLowerCase();
    },
  },
});

export const { addTask, deleteTask, editTask, searchTask, orderTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
