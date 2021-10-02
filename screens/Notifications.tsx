import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import Notification from '../components/Notification';
import {
	Container,
	FlatList,
	Header,
	IconWrapper,
	Text,
	Title,
} from './Notifications.style';

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
							<Header>
								<Title>Notifications</Title>
								<IconWrapper>
									<FontAwesome name="search" size={20} color="black" />
								</IconWrapper>
							</Header>
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
