import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentContainer from "../../helpers/ParentContainer";

const ParentChildPerformance = (): JSX.Element => {
	return (
		<ParentContainer containerStyle={styles.container}>
			<Text>ParentChildPerformance</Text>
		</ParentContainer>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default ParentChildPerformance;
