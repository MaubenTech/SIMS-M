import {
	ColorValue,
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
import { useNavigation } from "@react-navigation/native";
import RootCustomNavigation from "../../navigation/custom_navigation";
import { RootStackParamList } from "../../navigation/RootNavigation";

export type ButtonDetail = {
	title: string;
	description: string;
	titleIcon: React.FC<SvgProps>;
	onButtonClick?: () => void;
	navigate?: keyof RootStackParamList;
};

const type1 = {
	backgroundColor: colors.softLight,
	titleColor: colors.softDark,
	contentColor: "#6D6D6D",
	detailsColor: colors.softDark,
};
const type2 = {
	backgroundColor: "#F5E0C3",
	titleColor: "#B27C31",
	contentColor: "#B27C31",
	detailsColor: "#B27C31",
};
const type3 = {
	backgroundColor: "#B6B6B6",
	titleColor: "#555555",
	contentColor: "#555555",
	detailsColor: "#555555",
};
const type4 = {
	backgroundColor: colors.softDark,
	titleColor: colors.softLight,
	contentColor: colors.softLight,
	detailsColor: colors.softLight,
};
export const types = [type1, type2, type3, type4];

const ClassPreview = ({
	buttonDetail,
	typeIndex,
	detailText,
}: {
	buttonDetail: ButtonDetail;
	typeIndex: number;
	detailText?: string;
}): JSX.Element => {
	const navigation = useNavigation<RootCustomNavigation>();
	const IconSvg = buttonDetail.titleIcon;
	return (
		<TouchableOpacity
			style={[
				styles.entryButton,
				{ backgroundColor: types[typeIndex].backgroundColor },
			]}
			activeOpacity={0.7}
			onPress={() => {
				const { onButtonClick, navigate } = buttonDetail;
				onButtonClick && onButtonClick();
				navigate && navigation.navigate(navigate);
			}}
		>
			<View style={styles.entryButtonTitleContainer}>
				{
					<IconSvg
						style={
							{
								color: types[typeIndex].titleColor,
							} as StyleProp<ViewStyle>
						}
					/>
				}
				<Text
					style={[
						styles.entryButtonTitle,
						{ color: types[typeIndex].titleColor },
					]}
				>
					{buttonDetail.title}
				</Text>
			</View>
			<View style={styles.entryButtonTextContainer}>
				<Text
					style={[
						styles.entryButtonText,
						{ color: types[typeIndex].detailsColor },
					]}
				>
					{detailText ? detailText : "View details"}
				</Text>
				<ArrowRightIcon size={15} color={types[typeIndex].detailsColor} />
			</View>
		</TouchableOpacity>
	);
};

export const TeacherClassPreviews = ({
	details,
	detailText,
	typeIndices,
}: {
	details: ButtonDetail[];
	detailText?: string[];
	typeIndices?: number[];
}): JSX.Element => {
	return (
		<View style={styles.entryButtonsContainer}>
			{details.map((value, index) => {
				return (
					index <= 2 && (
						<ClassPreview
							key={index}
							buttonDetail={value}
							typeIndex={typeIndices ? typeIndices[index] : index % 4}
							detailText={detailText ? detailText[index] : "View details"}
						/>
					)
				);
			})}
		</View>
	);
};

const ClassButton = ({
	details,
	typeIndex,
}: {
	details: ButtonDetail;
	typeIndex: number;
}): JSX.Element => {
	const navigation = useNavigation<RootCustomNavigation>();
	const Icon = details.titleIcon;
	return (
		<View
			style={[
				styles.classButton,
				{
					backgroundColor: types[typeIndex].backgroundColor,
				},
			]}
		>
			<View style={styles.classButtonTitleContainer}>
				<Icon
					style={[
						styles.classButtonTitleIcon,
						{
							color: types[typeIndex].titleColor,
						} as StyleProp<ViewStyle>,
					]}
				/>
				<Text
					style={[
						styles.classButtonTitle,
						{ color: types[typeIndex].titleColor },
					]}
				>
					{details.title}
				</Text>
			</View>
			<View style={styles.classButtonContent}>
				<Text
					style={[
						styles.classButtonContentText,
						{ color: types[typeIndex].contentColor },
					]}
				>
					{details.description}
				</Text>
				<TouchableOpacity
					activeOpacity={0.6}
					style={styles.viewDetailsContainer}
					onPress={() => {
						const { onButtonClick, navigate } = details;
						onButtonClick && onButtonClick();
						navigate && navigation.navigate(navigate);
					}}
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

const TeacherClassButtons = ({
	buttonDetails,
	headerTitle,
	typeIndices,
}: {
	headerTitle: string;
	buttonDetails: ButtonDetail[];
	typeIndices?: number[];
}): JSX.Element => {
	return (
		<ParentContainer addSidePadding addTopPadding>
			<Header title={headerTitle} addNotification />
			<View style={styles.classButtonContainer}>
				{buttonDetails.map((value, _) => (
					<ClassButton
						key={_}
						details={value}
						typeIndex={typeIndices ? typeIndices[_] : _ % 4}
					/>
				))}
			</View>
		</ParentContainer>
	);
};

const styles = StyleSheet.create({
	container: {},

	// Class Buttons Preview styles

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

	//Class Buttons styles

	classButtonContainer: {
		marginTop: 0.03 * height,
		gap: 0.015 * height,
	},
	classButton: {
		gap: 0.008 * height,
		padding: 0.05 * width,
		paddingBottom: 0.02 * height,
		paddingTop: 0.015 * height,
		borderRadius: 10,
	},
	classButtonTitleContainer: {
		alignSelf: "flex-start",
		gap: 0.008 * height,
	},
	classButtonTitle: {
		fontSize: 17,
		fontWeight: "500",
		textAlign: "left",
	},
	classButtonTitleIcon: {
		marginLeft: 0.02 * width,
	},
	classButtonContent: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	classButtonContentText: {
		fontSize: 15,
		fontWeight: "500",
		width: "60%",
		lineHeight: 22,
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

export default TeacherClassButtons;
