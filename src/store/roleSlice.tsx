import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type RoleSliceType = {
	name: string;
	initialState: RoleSliceStateType;
	reducers: {};
};

export type RoleSliceStateType = {
	role: Role;
};

export type Role =
	| "Teacher"
	| "Parent"
	| "Student"
	| "Admin"
	| "Owner"
	| "Principal";

export type RoleStateType = {
	role: Role;
};

const initialState: RoleStateType = {
	role: "Student",
};

const roleSlice = createSlice({
	name: "role",
	initialState,
	reducers: {
		setRole(state, action: PayloadAction<Role, string>) {
			state.role = action.payload;
		},
	},
});

export const roleActions = roleSlice.actions;

export default roleSlice;
