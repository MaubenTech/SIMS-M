import { createSlice } from "@reduxjs/toolkit";

type Session = {
	name: string;
	startDate: string;
	endDate: string;
};

export type SchoolSessionStateType = {
	currentSession: Session;
	allSessions: Session[];
	selectedSession: Session;
};

const dummyStartDate = new Date();
dummyStartDate.setFullYear(2023, 9, 8);

const dummyEndDate = new Date();
dummyEndDate.setFullYear(2024, 7, 22);

const lastYearStartDate = new Date();
lastYearStartDate.setFullYear(2022, 9, 6);

const lastYearEndDate = new Date();
lastYearEndDate.setFullYear(2023, 7, 24);

const lastTwoYearsStartDate = new Date();
lastTwoYearsStartDate.setFullYear(2021, 9, 6);

const lastTwoYearsEndDate = new Date();
lastTwoYearsEndDate.setFullYear(2022, 7, 26);

const currentSession: Session = {
	name: `${dummyStartDate.getFullYear()}/${dummyEndDate.getFullYear()}`,
	startDate: dummyStartDate.toString(),
	endDate: dummyEndDate.toString(),
};

const lastYearSession: Session = {
	name: `${lastYearStartDate.getFullYear()}/${lastYearEndDate.getFullYear()}`,
	startDate: lastYearStartDate.toString(),
	endDate: lastYearEndDate.toString(),
};

const lastTwoYearsSession: Session = {
	name: `${lastTwoYearsStartDate.getFullYear()}/${lastTwoYearsEndDate.getFullYear()}`,
	startDate: lastTwoYearsStartDate.toString(),
	endDate: lastTwoYearsEndDate.toString(),
};

const initialState: SchoolSessionStateType = {
	currentSession: currentSession,
	allSessions: [currentSession, lastYearSession, lastTwoYearsSession],
	selectedSession: currentSession,
};

const schoolSessionSlice = createSlice({
	name: "schoolSession",
	initialState,
	reducers: {},
});

export const schoolSessionActions = schoolSessionSlice.actions;

export default schoolSessionSlice;
