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
      console.log({ state, action });
      state.cords = action.payload;
      console.log(state.cords);
    },
  },
});

export const { clear, update } = cordsSlice.actions;

export default cordsSlice.reducer;
