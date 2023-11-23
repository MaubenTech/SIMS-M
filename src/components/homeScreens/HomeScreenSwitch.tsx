import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RoleSliceStateType } from "../../store/roleSlice";
import AdminHome from "../admin/AdminHome";
import OwnerHome from "../owner/OwnerHome";
import ParentHome from "../parents/ParentHome";
import StudentHome from "../students/StudentHome";
import TeacherHome from "../teachers/TeacherHome";

const HomeScreenSwitch = () => {
	const role = useSelector((state: RoleSliceStateType) => state.role);

	let HomeScreen: React.ElementType = View;

	switch (role) {
		case "Admin":
			HomeScreen = AdminHome;
			break;
		case "Owner":
			HomeScreen = OwnerHome;
			break;
		case "Parent":
			HomeScreen = ParentHome;
			break;
		case "Principal":
			HomeScreen = View;
			break;
		case "Student":
			HomeScreen = StudentHome;
			break;
		case "Teacher":
			HomeScreen = TeacherHome;
			break;
		default:
			console.log("Impossicant!");
	}

	return <HomeScreen />;
};

export default HomeScreenSwitch;
