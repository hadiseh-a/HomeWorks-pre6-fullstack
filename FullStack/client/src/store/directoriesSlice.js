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
      const { index, type } = action.payload;
      if (index >= 0) state[index].type = type;
    },
  },
});

export const { addDirectory, deleteDirectory, editDirectory } =
  directoriesSlice.actions;
export default directoriesSlice.reducer;
