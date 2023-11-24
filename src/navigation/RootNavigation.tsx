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
import withHomePageWrapper from "../helpers/withHomePageWrapper";
import HomeScreenSwitch from "../components/homeScreens/HomeScreenSwitch";
import BottomTabNavigation from "./BottomTabNavigation";

export type RootStackParamList = {
  OnboardingScreens: undefined;
};

const RootNavigation = (): JSX.Element => {
  const { Navigator, Group, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="BottomTabNavigation">
        <Group>
          <Screen name="LoginScreen" component={LoginScreen} />
        </Group>
        <Group>
          <Screen name="OnboardingScreens" component={OnboardingNavigation} />
        </Group>
        <Group screenOptions={{ headerShown: false }}>
          <Screen name="BottomTabNavigtion" component={BottomTabNavigation} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
