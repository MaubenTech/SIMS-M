import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Role } from "./roleSlice";
import { userActions, UserStateType } from "./userSlice";
import { ReduxStates } from ".";
import { useDispatch, useSelector } from "react-redux";

export type AuthStateType = {
	isLoggedIn: boolean;
};

const initialState: AuthStateType = {
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
			const dispatch = useDispatch();
			const { username, password } = action.payload;
			if (username === "King Rex" && password === "King Shadow") {
				state.isLoggedIn = true;
				dispatch(
					userActions.setUser({
						id: 1,
						firstName: "King",
						lastName: "Rex",
						gender: "Male",
						username: "KingShadow333",
						roles: ["Owner", "Principal"],
					})
				);
			} else {
			}
		},
		logout(state) {
			const dispatch = useDispatch();
			state.isLoggedIn = false;
			dispatch(userActions.setUser(null));
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
