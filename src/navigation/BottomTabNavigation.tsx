// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../components/home/Home';
// import {
//   HomeIcon as HomeIconOutline,
//   BanknotesIcon as BanknotesIconOutline,
//   ArrowsRightLeftIcon,
// } from 'react-native-heroicons/outline';
// import { BanknotesIcon as BanknotesIconActive } from 'react-native-heroicons/solid';
// import { HomeIcon as HomeIconActive } from 'react-native-heroicons/mini';
// import Savings from '../components/savings/Savings';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Wallet from '../components/wallet/Wallet';
// import lightTheme from '../helpers/colors';
// import Transactions from '../components/transactions/Transactions';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import {
//   faArrowRightArrowLeft,
//   faCircleUser as solidUser,
// } from '@fortawesome/free-solid-svg-icons';
// import { faCircleUser as regularUser } from '@fortawesome/free-regular-svg-icons';
// import Profile from '../components/profile/Profile';
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

// const BottomTabNavigation = (): JSX.Element => {
//   const { Navigator, Screen } = createBottomTabNavigator();
//   return (
//     <Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         // tabBarShowLabel: false,
//         // tabBarIconStyle: { backgroundColor: 'red' },
//         tabBarLabelStyle: { fontSize: 13 },
//         // tabBarBadge: 'Show!',
//         tabBarActiveTintColor: lightTheme.primary,
//         tabBarItemStyle: {
//           paddingBottom: '2%',
//           paddingTop: '2%',
//         },
//         tabBarStyle: {
//           // padding: '1%',
//           height: '7%',
//           backgroundColor: lightTheme.background,
//           borderTopWidth: 0,
//           // elevation: 0,
//         },
//         headerShown: false,
//       }}
//     >
//       <Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: (props: {
//             focused: boolean;
//             color: string;
//             size: number;
//           }) => {
//             return props.focused ? (
//               <HomeIconActive {...props} />
//             ) : (
//               <HomeIconOutline {...props} />
//             );
//           },
//         }}
//       />
//       <Screen
//         name="Savings"
//         component={Savings}
//         options={{
//           tabBarIcon: (props: {
//             focused: boolean;
//             color: string;
//             size: number;
//           }) => {
//             return props.focused ? (
//               <BanknotesIconActive {...props} />
//             ) : (
//               <BanknotesIconOutline {...props} />
//             );
//           },
//         }}
//       />

//       <Screen
//         name="Wallet"
//         component={Wallet}
//         options={{
//           tabBarIcon: (props: {
//             focused: boolean;
//             color: string;
//             size: number;
//           }) => {
//             const name = props.focused ? 'wallet' : 'wallet-outline';
//             return <MaterialCommunityIcons name={name} {...props} />;
//           },
//         }}
//       />

//       <Screen
//         name="Transactions"
//         component={Transactions}
//         options={{
//           tabBarIcon: (props: {
//             focused: boolean;
//             color: string;
//             size: number;
//           }) => {
//             return <ArrowsRightLeftIcon {...props} />;
//           },
//         }}
//       />

//       <Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: (props: {
//             focused: boolean;
//             color: string;
//             size: number;
//           }) => {
//             return (
//               <FontAwesomeIcon
//                 icon={props.focused ? solidUser : regularUser}
//                 {...props}
//               />
//             );
//           },
//         }}
//       />
//     </Navigator>
//   );
// };

// export default BottomTabNavigation;
