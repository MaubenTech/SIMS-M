import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Role } from "./roleSlice";

type Gender = "Male" | "Female";

export type AuthStateType = {
	user:
		| {
				id: number;
				firstName: string;
				middleName?: string;
				lastName: string;
				gender: Gender;
				username: string;
				roles: Role[];
		  }
		| undefined;
	isLoggedIn: boolean;
};

const initialState: AuthStateType = {
	user: undefined,
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		login(
			state,
			action: PayloadAction<{ username: string; password: string }>
		) {
			const { username, password } = action.payload;
			if (username === "King Rex" && password === "King Shadow") {
				state.isLoggedIn = true;
				state.user = {
					id: 1,
					firstName: "King",
					lastName: "Rex",
					gender: "Male",
					username: "KingShadow333",
					roles: ["Owner", "Principal"],
				};
			} else {
			}
		},
		logout(state) {
			state.isLoggedIn = false;
			state.user = undefined;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
