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
    resize: (state, action) => {
      const width = action.payload;
      state.cords = state.cords.map((item) => {
        // convert "120px" to 120
        const numWidth = parseInt(item.options.width);
        if (item.x < 0) {
          return { ...item, x: 0 };
        } else if (item.x + numWidth > width) {
          return { ...item, x: width - numWidth };
        }
        return item; // If no change is needed
      });
    },
  },
});

export const { clear, update, resize } = cordsSlice.actions;

export default cordsSlice.reducer;
