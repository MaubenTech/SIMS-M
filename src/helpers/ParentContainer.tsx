import {
	Dimensions,
	ScrollView,
	StyleProp,
	StyleSheet,
	Text,
	View,
	ViewStyle,
} from "react-native";
import React from "react";
import colors from "./colors";

const { width, height } = Dimensions.get("window");

const ParentContainer = ({
	containerStyle,
	contentContainerStyle,
	addSidePadding,
	dontAddTopPadding,
	children,
}: {
	containerStyle?: StyleProp<ViewStyle>;
	contentContainerStyle?: StyleProp<ViewStyle>;
	addSidePadding?: boolean;
	dontAddTopPadding?: boolean;
	children: JSX.Element | JSX.Element[] | null;
}): JSX.Element => {
	return (
		<ScrollView
			style={[
				styles.container,
				!dontAddTopPadding && {
					paddingTop: 0.02 * height,
				},
				containerStyle,
				addSidePadding && {
					paddingLeft: 0.04 * width,
					paddingRight: 0.04 * width,
				},
			]}
			contentContainerStyle={[
				contentContainerStyle,
				{
					paddingBottom: 0.015 * height,
				},
			]}
		>
			{children}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.backgroundColor,
		flex: 1,
	},
});

export default ParentContainer;
