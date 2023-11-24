import { configureStore } from "@reduxjs/toolkit";
import roleSlice, { Role, RoleStateType } from "./roleSlice";
import authSlice, { AuthStateType } from "./authSlice";

export type ReduxStates = {
	role: RoleStateType;
	auth: AuthStateType;
};

const store = configureStore({
	reducer: {
		role: roleSlice.reducer,
		auth: authSlice.reducer,
	},
});

export default store;
