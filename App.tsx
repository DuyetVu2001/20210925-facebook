import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { image1 } from './assets';
import Home from './screens/Home';

export default function App() {
	return (
		<View style={styles.container}>
			<Home />
			{/* <View style={styles.wrapper} />
			<Image source={image1} style={styles.img} /> */}
		</View>
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
