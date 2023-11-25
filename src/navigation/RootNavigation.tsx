/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
// import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingNavigation from "./OnboardingNavigation";
import LoginScreen from "../components/loginScreens/LoginScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import ParentChildPerformance from "../components/parents/ParentChildPerformance";
import ParentProfile from "../components/parents/ParentProfile";
import TeacherSubjectClass from "../components/teachers/TeacherSubjectClass";
import ParentChildGrades from "../components/parents/ParentChildGrades";
import TeacherFormClass from "../components/teachers/TeacherFormClass";

export type RootStackParamList = {
	BottomTabNavigation: undefined;
	LoginScreen: undefined;
	OnboardingScreens: undefined;
	ParentChildPerformance: undefined;
	ParentProfile: undefined;
	TeacherSubjectClass: undefined;
	TeacherFormClass: undefined;
};

const RootNavigation = (): JSX.Element => {
	const { Navigator, Group, Screen } = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Navigator initialRouteName="BottomTabNavigation">
				<Group screenOptions={{ headerShown: false }}>
					<Screen name="LoginScreen" component={LoginScreen} />
				</Group>
				<Group screenOptions={{ headerShown: false }}>
					<Screen name="OnboardingScreens" component={OnboardingNavigation} />
				</Group>
				<Group screenOptions={{ headerShown: false }}>
					<Screen name="BottomTabNavigation" component={BottomTabNavigation} />
				</Group>
				<Group screenOptions={{ headerShown: false }}>
					<Screen name="ParentChildGrades" component={ParentChildGrades} />
					<Screen
						name="ParentChildPerformance"
						component={ParentChildPerformance}
					/>
					<Screen name="ParentProfile" component={ParentProfile} />
				</Group>
				<Group screenOptions={{ headerShown: false }}>
					<Screen name="TeacherFormClass" component={TeacherFormClass} />
					<Screen name="TeacherSubjectClass" component={TeacherSubjectClass} />
				</Group>
			</Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;
