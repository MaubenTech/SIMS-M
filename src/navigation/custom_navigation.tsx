import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootNavigation";
import { OnboardingStackParamList } from "./OnboardingNavigation";

type RootCustomNavigation = NativeStackNavigationProp<RootStackParamList>;

export type RootCustomNavigationProp = { navigation: RootCustomNavigationProp };

export type OnboardingCustomNavigation =
	NativeStackNavigationProp<OnboardingStackParamList>;

export default RootCustomNavigation;
