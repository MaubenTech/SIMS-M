import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const roleSliceObject: RoleSliceType = {
  name: "role",
  initialState: { role: "Student" },
  reducers: {
    setRole(state: RoleSliceStateType, action: { payload: Role }) {
      state.role = action.payload;
    },
  },
};

const roleSlice = createSlice(roleSliceObject);

export const roleActions = roleSlice.actions;

export default roleSlice;
