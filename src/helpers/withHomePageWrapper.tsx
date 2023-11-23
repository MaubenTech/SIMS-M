import { StyleSheet, View } from "react-native";
import React from "react";

type HomePageWrapperProps = {};

const withHomePageWrapper = <P extends object>(
	WrappedComponent: React.ComponentType<P & HomePageWrapperProps>
) => {
	const WithHomePageWrapper = (props: P) => {
		return (
			<View>
				{/* <WrappedComponent {...props} /> */}
				<WrappedComponent {...props} />
			</View>
		);
	};

	return WithHomePageWrapper;
};

const styles = StyleSheet.create({});

export default withHomePageWrapper;
