import { createSlice } from "@reduxjs/toolkit";

export type TeacherStateType = {
	id: number;
	teacherStatus: TeacherStatus;
	// formClass: Class;
};

export type TeacherStatus =
	| "W"
	| "WORKING"
	| "S"
	| "SUSPENDED"
	| "R"
	| "RESIGNED"
	| "f"
	| "FIRED";

const initialState: TeacherStateType = {
	id: 0,
	teacherStatus: "W",
};

const teacherSlice = createSlice({
	name: "teacher",
	initialState,
	reducers: {},
});

export const teacherActions = teacherSlice.actions;

export default teacherSlice;
