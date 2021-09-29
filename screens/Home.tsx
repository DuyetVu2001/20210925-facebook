import React from 'react';
import CreatePost from '../components/CreatePost';
import CreateMeeting from '../components/CreateMeeting';
import Story from '../components/Story';
import { Container, Stories } from './Home.style';

const Home = () => {
	const data = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<Container>
			<CreatePost />
			<CreateMeeting />
			{/* STORIES */}
			<Stories
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={() => <Story />}
				keyExtractor={(item: any) => item.id}
			/>
		</Container>
	);
};

export default Home;
