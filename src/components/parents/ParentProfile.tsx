import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentContainer from "../../helpers/ParentContainer";

const ParentProfile = (): JSX.Element => {
	return (
		<ParentContainer containerStyle={styles.container}>
			<Text>ParentProfile</Text>
		</ParentContainer>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default ParentProfile;
