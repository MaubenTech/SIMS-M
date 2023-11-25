import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { ReduxStates } from "../../redux";
import LoginScreen from "../loginScreens/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import RootCustomNavigation from "../../navigation/custom_navigation";

type AuthProps = {};

const withAuth = <T extends object>(
	WrappedComponent: React.ComponentType<T & AuthProps>
) => {
	const WithAuth = (props: T): JSX.Element => {
		const navigation = useNavigation<RootCustomNavigation>;
		const isLoggedIn = useSelector(
			(state: ReduxStates) => state.auth.isLoggedIn
		);
		return !isLoggedIn ? (
			<LoginScreen navigation={navigation} />
		) : (
			<WrappedComponent {...props} />
		);
	};

	return WithAuth;
};

const styles = StyleSheet.create({});

export default withAuth;
