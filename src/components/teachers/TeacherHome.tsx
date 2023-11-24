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

const { width, height } = Dimensions.get("window");

const EntryButton = ({
	bgColor,
	iconSvg: IconSvg,
	iconColor,
	title,
	titleColor,
	arrowText,
	arrowTextColor,
	arrowColor,
}: {
	bgColor?: ColorValue;
	iconSvg?: React.FC<SvgProps>;
	iconColor?: ColorValue;
	title: string;
	titleColor?: ColorValue;
	arrowText?: string;
	arrowTextColor?: ColorValue;
	arrowColor?: ColorValue;
	onPress?: () => void;
}) => {
	return (
		<TouchableOpacity
			style={[styles.entryButton, { backgroundColor: bgColor }]}
			activeOpacity={0.7}
		>
			<View style={styles.entryButtonTitleContainer}>
				{IconSvg && (
					<IconSvg
						style={
							{
								color: iconColor ? iconColor : colors.softDark,
							} as StyleProp<ViewStyle>
						}
					/>
				)}
				<Text
					style={[
						styles.entryButtonTitle,
						{ color: titleColor ? titleColor : colors.softDark },
					]}
				>
					{title}
				</Text>
			</View>
			<View style={styles.entryButtonTextContainer}>
				<Text
					style={[
						styles.entryButtonText,
						{ color: arrowTextColor ? arrowTextColor : colors.softDark },
					]}
				>
					{arrowText ? arrowText : "View details"}
				</Text>
				<ArrowRightIcon
					size={15}
					color={
						arrowColor
							? arrowColor
							: arrowTextColor
							? arrowTextColor
							: colors.softDark
					}
				/>
			</View>
		</TouchableOpacity>
	);
};

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
			<View style={styles.activityButtonImage}>{IconSvg && <IconSvg />}</View>
			<Text style={styles.activityText}>{text}</Text>
			<View style={styles.activityIcon}>
				<ArrowRightIcon size={22} color={"#000"} />
			</View>
		</TouchableOpacity>
	);
};

const FormClass = (): JSX.Element => {
	return (
		<View style={styles.entry}>
			<View style={styles.entryTitleContainer}>
				<Text style={styles.entryTitle}>Form Class (Jss3)</Text>
				<TouchableOpacity activeOpacity={0.6}>
					<Text style={styles.viewAllText}>View all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.entryButtonsContainer}>
				<EntryButton
					bgColor={colors.softLight}
					title="Timetable"
					iconSvg={TimetableIcon}
				/>
				<EntryButton
					bgColor={colors.softDark}
					title="Students Info"
					iconSvg={StudentsInfoIcon}
					titleColor={colors.softLight}
					arrowTextColor={colors.softLight}
				/>
				<EntryButton
					bgColor={colors.softLight}
					title="Attendance"
					iconSvg={AttendanceIcon}
				/>
			</View>
		</View>
	);
};

const SubjectClass = (): JSX.Element => {
	return (
		<View style={styles.entry}>
			<View style={styles.entryTitleContainer}>
				<Text style={styles.entryTitle}>Subject Class</Text>
				<TouchableOpacity activeOpacity={0.6}>
					<Text style={styles.viewAllText}>View all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.entryButtonsContainer}>
				<EntryButton
					bgColor={colors.softLight}
					title="English"
					iconSvg={EnglishIcon}
				/>
				<EntryButton
					bgColor="#F5E0C3"
					title="English"
					iconSvg={EnglishIcon}
					iconColor="#B27C31"
					titleColor="#B27C31"
					arrowTextColor="#B27C31"
				/>
				<EntryButton
					bgColor="#B6B6B6"
					iconSvg={LiteratureIcon}
					title="Literature"
					titleColor="#555555"
					arrowTextColor="#555555"
				/>
			</View>
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
	return (
		<ParentContainer addSidePadding>
			<View style={styles.entries}>
				<View style={styles.entry}>
					<Text style={styles.entryTitle}>Academic Session</Text>
					<View style={styles.entryView}></View>
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
