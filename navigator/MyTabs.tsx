import {
	AntDesign,
	FontAwesome5,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StatusBar } from 'react-native';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Watch from '../screens/Watch';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
	return (
		<Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }}>
			<Tab.Screen
				options={{
					title: ({ color, focused }) => (
						<AntDesign
							name="home"
							size={22}
							color={focused ? 'blue' : 'gray'}
						/>
					),
				}}
				name="Home"
				component={Home}
			/>
			<Tab.Screen
				options={{
					title: ({ color, focused }) => (
						<MaterialIcons
							name="group"
							size={22}
							color={focused ? 'blue' : 'gray'}
						/>
					),
				}}
				name="Groups"
				component={Home}
			/>
			<Tab.Screen
				options={{
					title: ({ color, focused }) => (
						<MaterialCommunityIcons
							name="television-play"
							size={22}
							color={focused ? 'blue' : 'gray'}
						/>
					),
				}}
				name="Watch"
				component={Watch}
			/>
			<Tab.Screen
				options={{
					title: ({ color, focused }) => (
						<FontAwesome5
							name="store"
							size={18}
							color={focused ? 'blue' : 'gray'}
						/>
					),
				}}
				name="Shopping"
				component={Home}
			/>
			<Tab.Screen
				options={{
					title: ({ color, focused }) => (
						<FontAwesome5
							name="bell"
							size={22}
							color={focused ? 'blue' : 'gray'}
						/>
					),
				}}
				name="Notifications"
				component={Notifications}
			/>
			<Tab.Screen
				options={{
					title: ({ color, focused }) => (
						<MaterialIcons
							name="menu"
							size={26}
							color={focused ? 'blue' : 'gray'}
						/>
					),
				}}
				name="Settings"
				component={Home}
			/>
		</Tab.Navigator>
	);
}
