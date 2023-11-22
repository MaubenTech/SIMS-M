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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowRightArrowLeft,
  faCircleUser as solidUser,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser as regularUser } from "@fortawesome/free-regular-svg-icons";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

const BottomTabNavigation = (): JSX.Element => {
  const { Navigator, Screen } = createBottomTabNavigator();

  const [profile, setProfile] = useState()<JSX.Element>;
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarShowLabel: false,
        // tabBarIconStyle: { backgroundColor: 'red' },
        tabBarLabelStyle: { fontSize: 13 },
        // tabBarBadge: 'Show!',
        tabBarActiveTintColor: lightTheme.primary,
        tabBarItemStyle: {
          paddingBottom: "2%",
          paddingTop: "2%",
        },
        tabBarStyle: {
          // padding: '1%',
          height: "7%",
          backgroundColor: lightTheme.background,
          borderTopWidth: 0,
          // elevation: 0,
        },
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
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
      <Screen
        name="Group"
        component={GroupScreen}
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
      />

      <Screen
        name="Profile"
        component={profile}
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
