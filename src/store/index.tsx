import { configureStore } from "@reduxjs/toolkit";
import roleSlice from "./roleSlice";

const store = configureStore({
  reducer: {
    role: roleSlice.reducer,
  },
});

export default store;
