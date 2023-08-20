import { configureStore } from "@reduxjs/toolkit";
import cordsSlice from "./cords";

export default configureStore({
  reducer: {
    cords: cordsSlice,
  },
});
