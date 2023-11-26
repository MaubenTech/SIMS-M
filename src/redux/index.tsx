import { configureStore } from "@reduxjs/toolkit";
import roleSlice, { Role, RoleStateType } from "./roleSlice";
import authSlice, { AuthStateType } from "./authSlice";
import userSlice, { UserStateType } from "./userSlice";
import schoolSessionSlice, {
	SchoolSessionStateType,
} from "./schoolSessionSlice";
import teacherSlice, { TeacherStateType } from "./teacherSlice";

export type ReduxStates = {
	auth: AuthStateType;
	role: RoleStateType;
	schoolSession: SchoolSessionStateType;
	teacher: TeacherStateType;
	user: UserStateType;
};

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		role: roleSlice.reducer,
		schoolSession: schoolSessionSlice.reducer,
		teacher: teacherSlice.reducer,
		user: userSlice.reducer,
	},
});

export default store;
