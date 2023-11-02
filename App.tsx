/* eslint-disable prettier/prettier */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './src/components/onboardingScreens/FirstScreen';
import SecondScreen from './src/components/onboardingScreens/SecondScreen';
import ThirdScreen from './src/components/onboardingScreens/ThirdScreen';
import LoginScreen from './src/components/loginScreens/LoginScreen';
import {
  NativeStackNavigationConfig,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack/lib/typescript/src/types';
import HomeScreen from './src/components/homeScreens/HomeScreen';
import StudentCourse from './src/components/homeScreens/StudentCourse';
import TeacherDashboard from './src/components/teacherScreens/TeacherDashboard';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  // const naniga: NativeStackNavigationOptions;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="firstScreen"
          component={FirstScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }} />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }} />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }} />
        <Stack.Screen
          name="StudentCourse"
          component={StudentCourse}
          options={{
            animation: 'simple_push',
           headerShown: false,
          }} />
        <Stack.Screen
          name="TeacherDashboard"
          component={TeacherDashboard}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
