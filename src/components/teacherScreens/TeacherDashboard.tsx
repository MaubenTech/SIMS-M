import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { ScrollView } from "moti";
import { SelectList } from "react-native-dropdown-select-list";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faArrowRight,
	faChalkboardUser,
	faNoteSticky,
	faUserClock,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const { width, height } = Dimensions.get("window");

const TeacherDashboard = ({ navigation }: { navigation: any }): JSX.Element => {
	return (
		<View>
			{/* <Image
				// source={require('../../../resource/new2/logo2')}
				source={require("../../../resource/new2/logo2.jpeg")}
				style={styles.backgroundImage}
				resizeMethod="resize"
				resizeMode="cover"
			/> */}
		</View>
	);
};
const styles = StyleSheet.create({
	backgroundImage: {
		flex: 2,
		flexDirection: "column",
		width: 415,
		height: 490,
		position: "absolute",
	},
});

export default TeacherDashboard;
