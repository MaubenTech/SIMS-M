import {
	StyleProp,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from "react-native";
import React from "react";
import ParentContainer from "../../helpers/ParentContainer";
import Header from "../../helpers/Header";
import { SvgProps } from "react-native-svg";
import EnglishIcon from "../../../resources/images/english-icon.svg";
import LiteratureIcon from "../../../resources/images/literature-icon.svg";
import { height, width } from "../../helpers/dimensions";
import colors from "../../helpers/colors";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { ButtonDetail, types } from "./TeacherClassButtons";
import TimetableIcon from "../../../resources/images/timetable-icon.svg";
import StudentInformationIcon from "../../../resources/images/students-info-icon.svg";
import AttendanceIcon from "../../../resources/images/attendance-icon.svg";
import AcademicResultIcon from "../../../resources/images/academic-result-icon.svg";
import TeacherClassButtons from "./TeacherClassButtons";
import { useNavigation } from "@react-navigation/native";
import RootCustomNavigation from "../../navigation/custom_navigation";

const timetable: ButtonDetail = {
	title: "Timetable",
	description: "Timetable of subjects/courses taken",
	titleIcon: TimetableIcon,
	navigate: "ClassTimetable",
};

const studentsInformation: ButtonDetail = {
	title: "Students information",
	description: "Information of each student in class",
	titleIcon: StudentInformationIcon,
	navigate: "FormClassStudentsInformation",
};

const attendance: ButtonDetail = {
	title: "Attendance",
	description: "Details of students who took attendance",
	titleIcon: AttendanceIcon,
};

const academicResult: ButtonDetail = {
	title: "Academic Result",
	description: "View class academic result",
	titleIcon: AcademicResultIcon,
};

export const formClassDetails: ButtonDetail[] = [
	timetable,
	{ ...studentsInformation, title: "Students Info" },
	attendance,
	academicResult,
];

const TeacherFormClass = (): JSX.Element => {
	return (
		<TeacherClassButtons
			buttonDetails={formClassDetails}
			headerTitle="Form Class (Jss3)"
			typeIndices={[0, 3, 0, 3]}
		/>
	);
};

const styles = StyleSheet.create({
	container: {},
	subjectClassContainer: {
		marginTop: 0.03 * height,
		gap: 0.015 * height,
	},
	subjectClass: {
		gap: 0.008 * height,
		padding: 0.05 * width,
		paddingBottom: 0.04 * height,
		paddingTop: 0.015 * height,
		borderRadius: 10,
	},
	subjectClassTitleContainer: {
		alignItems: "center",
		alignSelf: "flex-start",
		gap: 0.008 * height,
	},
	subjectClassTitle: {
		fontSize: 17,
		fontWeight: "500",
		textAlign: "left",
	},
	subjectClassContent: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	subjectClassContentText: {
		fontSize: 15,
		fontWeight: "500",
	},
	viewDetailsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 0.025 * width,
	},
	viewDetailsText: {
		fontSize: 15,
		fontWeight: "500",
	},
});

export default TeacherFormClass;
