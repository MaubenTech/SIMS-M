import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Role =
	| "Teacher"
	| "Parent"
	| "Student"
	| "Admin"
	| "Owner"
	| "Principal";

export type RoleStateType = {
	name: Role;
};

const initialState: RoleStateType = { name: "Student" };

const roleSlice = createSlice({
	name: "roles",
	initialState,
	reducers: {
		setRole(state: RoleStateType, action: PayloadAction<Role>) {
			console.log(`Action: ${JSON.stringify(action.payload)}`);
			state.name = action.payload;
		},
	},
});

export const roleActions = roleSlice.actions;

export default roleSlice;
