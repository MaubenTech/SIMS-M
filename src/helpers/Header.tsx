import {
	Dimensions,
	StyleProp,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import colors from "./colors";
import { ArrowSmallLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import RootCustomNavigation from "../navigation/custom_navigation";

const { width, height } = Dimensions.get("window");

const Header = ({
	title,
	addNotification,
	middleTitle,
	headerStyle,
}: {
	title?: string;
	addNotification?: boolean;
	middleTitle?: boolean;
	headerStyle?: StyleProp<ViewStyle>;
}): JSX.Element => {
	const navigation = useNavigation<RootCustomNavigation>();
	return (
		<View style={[styles.headerContainer, headerStyle]}>
			<TouchableWithoutFeedback
				onPress={() => {
					navigation.goBack();
				}}
			>
				<ArrowSmallLeftIcon size={20} color={colors.softDark} />
			</TouchableWithoutFeedback>

			<Text
				style={[
					styles.headerText,
					middleTitle
						? {
								flex: 1,
								textAlign: "center",
						  }
						: { marginLeft: 0.08 * width },
				]}
			>
				{title ? title : "Header"}
			</Text>

			{addNotification && (
				<TouchableWithoutFeedback>
					<FontAwesomeIcon icon={faBell} size={20} color={colors.softDark} />
				</TouchableWithoutFeedback>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
	},
	headerText: {
		flex: 1,
		fontSize: 18,
		fontWeight: "500",
		color: colors.softDark,
	},
});

export default Header;
