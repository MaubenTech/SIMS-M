import { Dimensions, Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import HomePageSalutation from "./HomePageSalutation";
import { useDispatch, useSelector } from "react-redux";
import { roleActions } from "../redux/roleSlice";
import { ReduxStates } from "../redux";
import ParentContainer from "./ParentContainer";

type HomePageWrapperProps = {};

const withHomePageWrapper = <P extends object>(
	WrappedComponent: React.ComponentType<P & HomePageWrapperProps>
) => {
	const dispatch = useDispatch();
	dispatch(roleActions.setRole("Teacher"));
	const role = useSelector((state: ReduxStates) => state.role.name);
	console.log(`${role}`);
	const WithHomePageWrapper = (props: P) => {
		return (
			<ParentContainer>
				{/* <WrappedComponent {...props} /> */}
				<HomePageSalutation />
				<WrappedComponent {...props} />
			</ParentContainer>
		);
	};

	return WithHomePageWrapper;
};

const styles = StyleSheet.create({});

export default withHomePageWrapper;
