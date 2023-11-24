import { configureStore } from "@reduxjs/toolkit";
import roleSlice from "./roleSlice";
import authSlice from "./authSlice";

const store = configureStore({
	reducer: {
		role: roleSlice.reducer,
		auth: authSlice.reducer,
	},
});

export default store;
