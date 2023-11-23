/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../components/onboardingScreens/FirstScreen";
import ThirdScreen from "../components/onboardingScreens/ThirdScreen";
import SecondScreen from "../components/onboardingScreens/SecondScreen";

export type OnboardingStackParamList = {
  FirstScreen: undefined;
  SecondScreen: undefined;
  ThirdScreen: undefined;
};

const OnboardingNavigation = (): JSX.Element => {
  const { Navigator, Group, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="FirstScreen" component={FirstScreen} />
      <Screen name="SecondScreen" component={SecondScreen} />
      <Screen name="ThirdScreen" component={ThirdScreen} />
    </Navigator>
  );
};

export default OnboardingNavigation;
