import { createSlice } from "@reduxjs/toolkit";

const directoriesSlice = createSlice({
  name: "directory",
  initialState: ["Main"],
  reducers: {
    addDirectory: (state, action) => {
      state.push(action.payload);
    },
    deleteDirectory: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    editDirectory: (state, action) => {
      const { index, item } = action.payload;
      if (index) state[index] = item;
      console.log(index);
    },
  },
});

export default directoriesSlice.reducer;
export const { addDirectory, deleteDirectory, editDirectory } =
  directoriesSlice.actions;
