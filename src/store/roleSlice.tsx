import { configureStore, createSlice } from "@reduxjs/toolkit";

type RoleSliceType = {
  name: string;
  initialState: { role: Role };
  reducers: {};
};

type Role = "Teacher" | "Parent" | "Student" | "Admin" | "Owner" | "Principal";

const roleSliceObject: RoleSliceType = {
  name: "role",
  initialState: { role: "Student" },
  reducers: {
    setRole(state: { role: Role }, action: { payload: Role }) {
      state.role = action.payload;
    },
  },
};

const roleSlice = createSlice(roleSliceObject);

export const roleActions = roleSlice.actions;

export default roleSlice;
