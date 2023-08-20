import { createSlice } from "@reduxjs/toolkit";

export const cordsSlice = createSlice({
  name: "cords",
  initialState: {
    cords: [],
  },
  reducers: {
    clear: (state) => {
      state.cords = [];
    },
    update: (state, action) => {
      state.cords = action.payload;
    },
  },
});

export const { clear, update, resize } = cordsSlice.actions;

export default cordsSlice.reducer;
