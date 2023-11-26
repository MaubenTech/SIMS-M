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
import TeacherClassButtons, {
	ButtonDetail,
	types,
} from "./TeacherClassButtons";

type ClassButtonDetail = {
	class: string;
} & ButtonDetail;

const english: ButtonDetail = {
	title: "English",
	description: "English Language",
	titleIcon: EnglishIcon,
};

const literature: ButtonDetail = {
	title: "Literature",
	description: "Literature",
	titleIcon: LiteratureIcon,
};

const jss3English: ClassButtonDetail = {
	class: "JSS3",
	...english,
};

const sss1English: ClassButtonDetail = {
	class: "SSS1",
	...english,
};

const sss2Literature: ClassButtonDetail = {
	class: "SSS2",
	...literature,
};

const sss1Literature: ClassButtonDetail = {
	class: "SSS1",
	...literature,
};

const sss3Literature: ClassButtonDetail = {
	class: "SSS3",
	...literature,
};

const convertToButtonDetail = (
	buttonDetail: ClassButtonDetail
): ButtonDetail => {
	return {
		...buttonDetail,
		description: `${buttonDetail.description} for ${buttonDetail.class}`,
	};
};

export const subjectClassDetails: ClassButtonDetail[] = [
	jss3English,
	sss1English,
	sss1Literature,
	sss2Literature,
	sss3Literature,
];

const SubjectClass = ({
	details,
	typeIndex,
}: {
	details: ClassButtonDetail;
	typeIndex: number;
}): JSX.Element => {
	const Icon = details.titleIcon;
	return (
		<View
			style={[
				styles.subjectClass,
				{
					backgroundColor: types[typeIndex].backgroundColor,
				},
			]}
		>
			<View style={styles.subjectClassTitleContainer}>
				<Icon
					style={
						{
							color: types[typeIndex].titleColor,
						} as StyleProp<ViewStyle>
					}
				/>
				<Text
					style={[
						styles.subjectClassTitle,
						{ color: types[typeIndex].titleColor },
					]}
				>
					{details.title}
				</Text>
			</View>
			<View style={styles.subjectClassContent}>
				<Text
					style={[
						styles.subjectClassContentText,
						{ color: types[typeIndex].contentColor },
					]}
				>
					{details.description} for {details.class}
				</Text>
				<TouchableOpacity
					activeOpacity={0.6}
					style={styles.viewDetailsContainer}
				>
					<Text
						style={[
							styles.viewDetailsText,
							{ color: types[typeIndex].detailsColor },
						]}
					>
						View details
					</Text>

					<ArrowRightIcon size={18} color={types[typeIndex].detailsColor} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const SubjectClasses = (): JSX.Element => {
	return (
		<View style={styles.subjectClassContainer}>
			{subjectClassDetails.map((value, _) => (
				<SubjectClass key={_} details={value} typeIndex={_ % 4} />
			))}
		</View>
	);
};

const TeacherSubjectClass = (): JSX.Element => {
	return (
		// <ParentContainer addSidePadding addTopPadding>
		// 	<Header title="Subject Class (Jss3)" addNotification />
		// 	<SubjectClasses />
		// </ParentContainer>

		<TeacherClassButtons
			buttonDetails={subjectClassDetails.map((value) =>
				convertToButtonDetail(value)
			)}
			headerTitle="Subject Class (Jss3)"
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

export default TeacherSubjectClass;
