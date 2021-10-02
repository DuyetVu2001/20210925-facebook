import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { image1 } from './assets';
import MyTabs from './navigator/MyTabs';
import Home from './screens/Home';

export default function App() {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
		// <View style={styles.container}>
		// 	<Home />
		// 	{/* <View style={styles.wrapper} />
		// 	<Image source={image1} style={styles.img} /> */}
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ccc',
	},

	// TEST
	wrapper: {
		width: 20,
		// height: 20,
		backgroundColor: 'red',
		aspectRatio: 1 / 2,
	},

	img: {
		display: 'flex',
		flexDirection: 'row',
		// width: 100,
		height: 100,
		aspectRatio: 2 / 3,
	},
});
