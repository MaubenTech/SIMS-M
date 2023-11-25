import {
	Dimensions,
	ScrollView,
	StatusBar,
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
	addTopPadding,
	scrollView,
	children,
}: {
	containerStyle?: StyleProp<ViewStyle>;
	contentContainerStyle?: StyleProp<ViewStyle>;
	addSidePadding?: boolean;
	addTopPadding?: boolean;
	scrollView?: boolean;
	children: JSX.Element | JSX.Element[] | null;
}): JSX.Element => {
	const viewStyles = [
		styles.container,
		addTopPadding && {
			paddingTop: 0.03 * height,
		},
		containerStyle,
		addSidePadding && {
			paddingLeft: 0.04 * width,
			paddingRight: 0.04 * width,
		},
	];
	return (
		<>
			<StatusBar
				barStyle="dark-content"
				backgroundColor={colors.backgroundColor}
			/>
			{!scrollView ? (
				<View style={[viewStyles, containerStyle]}>{children}</View>
			) : (
				<ScrollView
					style={[viewStyles, containerStyle]}
					contentContainerStyle={contentContainerStyle}
				>
					{children}
				</ScrollView>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.backgroundColor,
		flex: 1,
	},
});

export default ParentContainer;
