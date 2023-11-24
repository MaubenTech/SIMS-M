/* eslint-disable prettier/prettier */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import store from "./src/redux";

function App(): JSX.Element {
	// const Stack = createNativeStackNavigator();
	// const naniga: NativeStackNavigationOptions;

	return (
		<Provider store={store}>
			<RootNavigation />
		</Provider>
	);

	// return (
	// 	<NavigationContainer>
	// 		<Stack.Navigator initialRouteName="OnboardingScreens">
	// 			<Stack.Screen
	// 				name="firstScreen"
	// 				component={FirstScreen}
	// 				options={{
	// 					animation: "slide_from_right",
	// 					headerShown: false,
	// 				}}
	// 			/>
	// 			<Stack.Screen
	// 				name="SecondScreen"
	// 				component={SecondScreen}
	// 				options={{
	// 					animation: "slide_from_right",
	// 					headerShown: false,
	// 				}}
	// 			/>
	// 			<Stack.Screen
	// 				name="ThirdScreen"
	// 				component={ThirdScreen}
	// 				options={{
	// 					animation: "slide_from_right",
	// 					headerShown: false,
	// 				}}
	// 			/>
	// 			<Stack.Screen
	// 				name="LoginScreen"
	// 				component={LoginScreen}
	// 				options={{
	// 					animation: "slide_from_right",
	// 					headerShown: false,
	// 				}}
	// 			/>
	// 			<Stack.Screen
	// 				name="HomeScreen"
	// 				component={HomeScreen}
	// 				options={{
	// 					animation: "slide_from_right",
	// 					headerShown: false,
	// 				}}
	// 			/>
	// 			<Stack.Screen
	// 				name="OnboardingScreens"
	// 				component={OnboardingScreens}
	// 				options={{
	// 					animation: "slide_from_right",
	// 					headerShown: false,
	// 				}}
	// 			/>
	// 			<Stack.Screen
	// 				name="StudentCourse"
	// 				component={StudentCourse}
	// 				options={{
	// 					animation: "simple_push",
	// 					headerShown: false,
	// 				}}
	// 			/>
	// 			<Stack.Screen
	// 				name="TeacherDashboard"
	// 				component={TeacherDashboard}
	// 				options={{
	// 					animation: "slide_from_right",
	// 					headerShown: false,
	// 				}}
	// 			/>
	// 		</Stack.Navigator>
	// 	</NavigationContainer>
	// );
}

export default App;
