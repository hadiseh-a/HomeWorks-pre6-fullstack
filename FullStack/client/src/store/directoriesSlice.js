import { createSlice } from "@reduxjs/toolkit";

const directoriesSlice = createSlice({
  name: "directories",
  initialState: [{ _id: "1a", type: "Main" }],
  reducers: {
    addDirectory: (state, action) => {
      state.push({ _id: Date.now().toString(), type: action.payload });
    },
    deleteDirectory: (state, action) =>
      state.filter((dir) => dir._id !== action.payload),
    editDirectory: (state, action) => {
      const { _id, type } = action.payload;
      const index = state.findIndex((t) => t._id === _id);
      if (index >= 0) state[index].type = type;
    },
  },
});

export const { addDirectory, deleteDirectory, editDirectory } =
  directoriesSlice.actions;
export default directoriesSlice.reducer;
