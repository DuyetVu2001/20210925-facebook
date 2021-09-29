import React from 'react';
import { image1 } from '../assets';
import {
	ButtonWrapper,
	Container,
	CreateButton,
	FlatList,
	MeetingAvatar,
	Title,
} from './CreateMeeting.style';

export default function CreateMeeting() {
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

	return (
		<Container>
			<Title>Room meeting</Title>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={(index) =>
					index.index === 0 ? (
						<>
							<ButtonWrapper>
								<CreateButton>Create Meeting</CreateButton>
							</ButtonWrapper>
							<MeetingAvatar width={40} height={40} source={image1} />
						</>
					) : (
						<MeetingAvatar width={40} height={40} source={image1} />
					)
				}
				keyExtractor={(item: any) => item}
			/>
		</Container>
	);
}
