/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingNavigation from "./OnboardingNavigation";
import LoginScreen from "../components/loginScreens/LoginScreen";

export type RootStackParamList = {
  OnboardingScreens: undefined;
};

const RootNavigation = (): JSX.Element => {
  const { Navigator, Group, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="OnboardingScreen">
        <Group>
          <Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Group>
        <Group>
          <Screen
            name="OnboardingScreens"
            component={OnboardingNavigation}
            options={{ headerShown: false }}
          />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
