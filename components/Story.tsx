import React from 'react';
import { image1 } from '../assets';
import { Avatar } from '../styles/index.styles';
import { AvatarWrapper, Container, Image, Wrapper } from './Story.style';

export default function Story() {
	return (
		<Container>
			<Wrapper>
				<AvatarWrapper>
					<Avatar width={36} height={36} source={image1} />
				</AvatarWrapper>
				<Image source={image1} />
			</Wrapper>
		</Container>
	);
}
