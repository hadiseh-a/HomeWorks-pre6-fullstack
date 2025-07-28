import { createSlice } from "@reduxjs/toolkit";
import sample from "../assets/sample-data.json";

const taskSlice = createSlice({
  name: "tasks",
  initialState: { taskData: sample, searchTerm: "", orderBy: "" },
  reducers: {
    addTask: (state, action) => {
      state.taskData.unshift({
        _id: Date.now().toString(),
        ...action.payload,
      });
    },
    deleteTask: (state, action) => {
      state.taskData = state.taskData.filter((t) => t._id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, data } = action.payload;
      const i = state.taskData.findIndex((t) => t._id === id);
      if (i !== -1) {
        Object.assign(state.taskData[i], data);
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
