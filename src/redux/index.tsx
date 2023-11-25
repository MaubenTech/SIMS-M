import { configureStore } from "@reduxjs/toolkit";
import roleSlice, { Role, RoleStateType } from "./roleSlice";
import authSlice, { AuthStateType } from "./authSlice";
import userSlice, { UserStateType } from "./userSlice";

export type ReduxStates = {
	role: RoleStateType;
	auth: AuthStateType;
	user: UserStateType;
};

const store = configureStore({
	reducer: {
		role: roleSlice.reducer,
		auth: authSlice.reducer,
		user: userSlice.reducer,
	},
});

export default store;
