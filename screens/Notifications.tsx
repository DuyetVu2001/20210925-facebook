import React from 'react';
import HeaderScreen from '../components/HeaderScreen';
import Notification from '../components/Notification';
import { Container, FlatList, Text } from './Notifications.style';
import { FontAwesome } from '@expo/vector-icons';

export default function Notifications() {
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<Container>
			<FlatList
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={({ index }) =>
					index === 0 ? (
						<>
							<HeaderScreen
								title="Notification"
								icons={[<FontAwesome name="search" size={20} color="black" />]}
							/>
							<Text>Later</Text>
							<Notification />
						</>
					) : (
						<Notification />
					)
				}
				keyExtractor={(item: any) => `${item}`}
			/>
		</Container>
	);
}
