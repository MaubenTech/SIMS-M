import { Dimensions, Image, StyleSheet, View, Text } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import ParentContainer from "./ParentContainer";

const { width, height } = Dimensions.get("window");

const HomePageSalutation = () => {
	return (
		<ParentContainer containerStyle={styles.container} addSidePadding>
			<View style={styles.welcome}>
				<Text style={styles.welcomeText}>
					Welcome,
					<Text style={styles.subWelcomeText}> Jude Vale</Text>
				</Text>
				<FontAwesomeIcon icon={faBell} size={20} />
			</View>
			<View style={styles.header}>
				<View style={styles.headerText}>
					<Text style={styles.text}>Learning just got more interesting</Text>
				</View>
				<View style={styles.headerImage}>
					<Image
						source={require("../../resources/images/girlReading.png")}
						style={styles.mainImage}
					/>
				</View>
			</View>
		</ParentContainer>
	);
};

export default HomePageSalutation;

const styles = StyleSheet.create({
	container: {},
	welcome: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	welcomeText: {
		fontWeight: "300",
		fontSize: 16,
		color: "#000",
	},
	subWelcomeText: {
		// marginLeft: -190,
		fontSize: 17,
		fontWeight: "bold",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		// paddingTop: 20,
		borderRadius: 20,
		backgroundColor: "#FFE7C2",
		borderColor: "#FFE7C2",
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: 0.02 * height,
		alignItems: "center",
		paddingLeft: 0.06 * width,
	},
	headerText: {
		flexDirection: "column",
		flex: 1,
		// backgroundColor: "#f00",
	},
	headerImage: {
		// borderRadius: 50,
		alignItems: "center",
		height: "100%",
		// backgroundColor: "#ff0",
		paddingLeft: 0.04 * width,
		paddingRight: 0.01 * width,
	},
	text: {
		fontSize: 20,
		color: "#FC9403",
		fontWeight: "600",
		lineHeight: 28,
		letterSpacing: 0.6,
	},
	mainImage: {},
});
