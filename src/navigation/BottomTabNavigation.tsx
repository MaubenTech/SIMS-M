import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/homeScreens/HomeScreen";
import {
	HomeIcon as HomeIconOutline,
	BanknotesIcon as BanknotesIconOutline,
	ArrowsRightLeftIcon,
} from "react-native-heroicons/outline";
import { BanknotesIcon as BanknotesIconActive } from "react-native-heroicons/solid";
import { HomeIcon as HomeIconActive } from "react-native-heroicons/mini";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faArrowRightArrowLeft,
	faCircleUser as solidUser,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser as regularUser } from "@fortawesome/free-regular-svg-icons";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import ProfileScreen from "../components/students/ProfileScreen";
import GroupScreen from "../components/students/GroupScreen";
import StudentHome from "../components/students/StudentHome";
import HomeScreenSwitch from "../components/homeScreens/HomeScreenSwitch";
import HomePageSalutation from "../helpers/HomePageSalutation";
import withAuth from "../components/hocs/withAuth";
import withHomePageWrapper from "../components/hocs/withHomePageWrapper";

type BottomTabParamList = {
	HomeScreen: undefined;
	ProfileScreen: undefined;
	Groups: undefined;
};

const BottomTabNavigation = (): JSX.Element => {
	const { Navigator, Screen } = createBottomTabNavigator();
	return (
		<Navigator
			initialRouteName="Home"
			screenOptions={{
				// tabBarShowLabel: false,
				// tabBarIconStyle: { backgroundColor: 'red' },
				tabBarLabelStyle: { fontSize: 13 },
				// tabBarBadge: 'Show!',
				// tabBarActiveTintColor: lightTheme.primary,
				tabBarItemStyle: {
					paddingBottom: "2%",
					paddingTop: "2%",
				},
				tabBarStyle: {
					// padding: '1%',
					height: "7%",
					// backgroundColor: lightTheme.background,
					borderTopWidth: 0,
					// elevation: 0,
				},
				headerShown: false,
			}}
		>
			<Screen
				name="Home"
				// component={withAuth(withHomePageWrapper(HomeScreenSwitch))}
				component={withHomePageWrapper(HomeScreenSwitch)}
				options={{
					tabBarIcon: (props: {
						focused: boolean;
						color: string;
						size: number;
					}) => {
						return props.focused ? (
							<HomeIconActive {...props} />
						) : (
							<HomeIconOutline {...props} />
						);
					},
				}}
			/>
			{/* <Screen
				name="Group"
				component={groupScreen}
				options={{
					tabBarIcon: (props: {
						focused: boolean;
						color: string;
						size: number;
					}) => {
						return props.focused ? (
							<BanknotesIconActive {...props} />
						) : (
							<BanknotesIconOutline {...props} />
						);
					},
				}}
			/> */}

			<Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					tabBarIcon: (props: {
						focused: boolean;
						color: string;
						size: number;
					}) => {
						return (
							<FontAwesomeIcon
								icon={props.focused ? solidUser : regularUser}
								{...props}
							/>
						);
					},
				}}
			/>
		</Navigator>
	);
};

export default BottomTabNavigation;
