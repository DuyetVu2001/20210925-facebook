import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import HeaderScreen from '../components/HeaderScreen';
import Post from '../components/Post';
import { Container, Nav, Posts, Text, TextWrapper } from './Watch.style';

export default function Watch() {
	const data = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<Container>
			<HeaderScreen
				title="Watch"
				icons={[
					<FontAwesome name="user" size={20} color="black" />,
					<FontAwesome name="search" size={20} color="black" />,
				]}
			/>

			<Nav
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={() => (
					<TextWrapper>
						<Text>For you</Text>
					</TextWrapper>
				)}
				keyExtractor={(item: any) => `${item}`}
			/>

			<Posts
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={() => <Post />}
				keyExtractor={(item: any) => `${item}`}
			/>
		</Container>
	);
}
