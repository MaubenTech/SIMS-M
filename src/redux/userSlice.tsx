import {
	PayloadAction,
	SliceCaseReducers,
	ValidateSliceCaseReducers,
	createSlice,
} from "@reduxjs/toolkit";
import { Role } from "./roleSlice";

type Gender = "Male" | "Female";

type UserDetails = {
	id: number;
	firstName: string;
	middleName?: string;
	lastName: string;
	gender: Gender;
	username: string;
	roles: Role[];
};

export type UserStateType = {
	details: UserDetails | null;
};

const initialState: UserStateType = { details: null };

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<UserDetails | null>) {
			if (action.payload) {
				state.details = action.payload;
			}
			console.log("State has been set to " + state);
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice;
