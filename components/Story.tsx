import React from 'react';
import { image1 } from '../assets';
import {
	Container,
	Image,
	StoryAvatar,
	Username,
	Wrapper,
} from './Story.style';

export default function Story() {
	return (
		<Container>
			<Wrapper>
				<StoryAvatar width={36} height={36} source={image1} />
				<Image source={image1} />
				<Username>Anh Bạn Thảo</Username>
			</Wrapper>
		</Container>
	);
}
