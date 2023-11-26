import {
	ColorValue,
	Dimensions,
	StyleProp,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from "react-native";
import React from "react";
import ParentContainer from "../../helpers/ParentContainer";
import colors from "../../helpers/colors";
import TimetableIcon from "../../../resources/images/timetable-icon.svg";
import StudentsInfoIcon from "../../../resources/images/students-info-icon.svg";
import AttendanceIcon from "../../../resources/images/attendance-icon.svg";
import EnglishIcon from "../../../resources/images/english-icon.svg";
import LiteratureIcon from "../../../resources/images/literature-icon.svg";
import AssignmentIcon from "../../../resources/images/assignment-icon.svg";
import ExaminationIcon from "../../../resources/images/examination-icon.svg";
import UploadIcon from "../../../resources/images/upload-icon.svg";
import HostGameIcon from "../../../resources/images/host-game-icon.svg";
import PTAForumIcon from "../../../resources/images/pta-forum-icon.svg";
import { SvgProps } from "react-native-svg";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RootCustomNavigation from "../../navigation/custom_navigation";
import { useNavigation } from "@react-navigation/native";
import {
	ButtonDetail,
	TeacherClassPreviews,
	types,
} from "./TeacherClassButtons";
import { subjectClassDetails } from "./TeacherSubjectClass";
import { width, height } from "../../helpers/dimensions";
import { formClassDetails } from "./TeacherFormClass";
import { useSelector } from "react-redux";
import { ReduxStates } from "../../redux";

const ActivityButton = ({
	text,
	iconSvg: IconSvg,
}: {
	text: string;
	iconSvg?: React.FC<SvgProps>;
}) => {
	return (
		<TouchableOpacity
			style={[styles.activityButton, { backgroundColor: colors.softLight }]}
			activeOpacity={0.7}
		>
			<View style={styles.activityButtonImage}>
				{IconSvg && (
					<IconSvg style={{ color: colors.softDark } as StyleProp<ViewStyle>} />
				)}
			</View>
			<Text style={styles.activityText}>{text}</Text>
			<View style={styles.activityIcon}>
				<ArrowRightIcon size={22} color={"#000"} />
			</View>
		</TouchableOpacity>
	);
};

const FormClass = (): JSX.Element => {
	const navigation = useNavigation<RootCustomNavigation>();
	return (
		<View style={styles.entry}>
			<View style={styles.entryTitleContainer}>
				<Text style={styles.entryTitle}>Form Class (Jss3)</Text>
				<TouchableOpacity
					activeOpacity={0.6}
					onPress={() => navigation.navigate("TeacherFormClass")}
				>
					<Text style={styles.viewAllText}>View all</Text>
				</TouchableOpacity>
			</View>
			<TeacherClassPreviews
				details={formClassDetails}
				typeIndices={[0, 3, 0, 3]}
			/>
		</View>
	);
};

const SubjectClass = (): JSX.Element => {
	const navigation = useNavigation<RootCustomNavigation>();
	return (
		<View style={styles.entry}>
			<View style={styles.entryTitleContainer}>
				<Text style={styles.entryTitle}>Subject Class</Text>
				<TouchableOpacity
					activeOpacity={0.6}
					onPress={() => {
						navigation.navigate("TeacherSubjectClass");
					}}
				>
					<Text style={styles.viewAllText}>View all</Text>
				</TouchableOpacity>
			</View>
			<TeacherClassPreviews
				details={subjectClassDetails}
				detailText={[...subjectClassDetails.map((value) => `(${value.class})`)]}
			/>
		</View>
	);
};

const Activities = (): JSX.Element => {
	return (
		<View style={styles.entry}>
			<View style={styles.entryTitleContainer}>
				<Text style={styles.entryTitle}>Activities</Text>
			</View>
			<View style={styles.activitiesButtonsContainer}>
				<ActivityButton text="Assignments" iconSvg={AssignmentIcon} />
				<ActivityButton text="Examination" iconSvg={ExaminationIcon} />
				<ActivityButton text="Upload Student Scores" iconSvg={UploadIcon} />
				<ActivityButton text="Host Game" iconSvg={HostGameIcon} />
				<ActivityButton text="PTA Forum" iconSvg={PTAForumIcon} />
			</View>
		</View>
	);
};

const TeacherHome = (): JSX.Element => {
	const selectedSessionName = useSelector(
		(state: ReduxStates) => state.schoolSession.selectedSession.name
	);
	return (
		<ParentContainer
			addSidePadding
			containerStyle={{ paddingTop: 0.01 * height }}
		>
			<View style={styles.entries}>
				<View style={styles.entry}>
					<Text style={styles.entryTitle}>Academic Session</Text>
					<View style={styles.entryView}>
						<Text style={styles.sessionText}>{selectedSessionName}</Text>
					</View>
				</View>
				<FormClass />
				<SubjectClass />
				<Activities />
			</View>
		</ParentContainer>
	);
};

const styles = StyleSheet.create({
	entries: {
		gap: 0.03 * height,
	},
	entry: {
		gap: 0.015 * height,
	},
	entryTitle: {
		fontSize: 14,
		fontWeight: "500",
		color: "#000",
	},
	entryView: {
		paddingTop: 0.03 * height,
		paddingBottom: 0.03 * height,
		paddingLeft: 0.04 * width,
		paddingRight: 0.04 * width,
		width: "100%",
		backgroundColor: colors.softLight,
		borderRadius: 40,
		borderWidth: 1,
		borderColor: "#D0D0D0",
	},
	sessionText: {
		fontSize: 20,
		color: colors.softDark,
	},
	entryTitleContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	viewAllText: {
		color: "#DE9B3D",
	},
	entryButtonsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		// backgroundColor: "#ff0",
	},
	entryButton: {
		width: "32%",
		height: 0.12 * height,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		gap: 0.01 * height,
	},
	entryButtonTitleContainer: {
		alignItems: "center",
		gap: 0.008 * height,
	},
	entryButtonTitle: {
		fontSize: 16,
		fontWeight: "500",
	},
	entryButtonTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 0.015 * width,
	},
	entryButtonText: {
		color: colors.softDark,
	},
	activitiesButtonsContainer: {
		gap: 0.01 * height,
		width: "100%",
	},
	activityButton: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 0.05 * width,
		paddingRight: 0.05 * width,
		paddingTop: 0.01 * height,
		paddingBottom: 0.01 * height,
		width: "100%",
		height: 0.08 * height,
		borderRadius: 10,
	},
	activityButtonImage: {
		justifyContent: "center",
		alignItems: "center",
		width: "15%",
		height: "100%",
		backgroundColor: "#E3DEDE",
		borderRadius: 5,
	},
	activityText: {
		color: "#000",
		fontSize: 16,
		fontWeight: "500",
	},
	activityIcon: {
		padding: 0.02 * width,
		backgroundColor: "#DE9B3D",
		borderRadius: 100,
	},
});

export default TeacherHome;
