import { View, Text } from "react-native";
import React from "react";
import BottomTabNavigation from "../navigation/BottomTabNavigation";
import { useSelector } from "react-redux";
import { Role, RoleSliceStateType } from "../store/roleSlice";
import StudentHome from "../components/students/StudentHome";
import { ParamListBase } from "@react-navigation/native";

const HomePageWrapper = <T extends ParamListBase>(homeComponent: React.ComponentType<T>): React.ComponentType<T> => {
  const role = useSelector((state: RoleSliceStateType) => state.role);

  return homeComponent;
};

export default HomePageWrapper;
