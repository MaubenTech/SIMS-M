import {
	ScrollView,
	StyleProp,
	StyleSheet,
	Text,
	View,
	ViewStyle,
} from "react-native";
import React from "react";
import colors from "./colors";

const ParentContainer = ({
	containerStyle,
	contentContainerStyle,
	children,
}: {
	containerStyle?: StyleProp<ViewStyle>;
	contentContainerStyle?: StyleProp<ViewStyle>;
	children: JSX.Element | JSX.Element[] | null;
}): JSX.Element => {
	return (
		<ScrollView style={[styles.container, containerStyle]}>
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
