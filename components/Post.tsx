import { Entypo, Feather } from '@expo/vector-icons';
import React from 'react';
import { image1 } from '../assets';
import { Avatar } from '../styles/index.styles';
import {
	Container,
	Content,
	HeaderWrapper,
	IconsWrapper,
	Image,
	ImageWrapper,
	Time,
	TitleWrapper,
	UserInfo,
	Username,
} from './Post.style';

export default function Post() {
	return (
		<Container>
			<HeaderWrapper>
				<TitleWrapper>
					<Avatar source={image1} />

					<UserInfo>
						<Username>Anh Bạn Thảo</Username>
						<Time>2 hour</Time>
					</UserInfo>
				</TitleWrapper>

				<IconsWrapper>
					<Entypo name="dots-three-horizontal" size={24} color="black" />
					<Feather name="x" size={24} color="black" />
				</IconsWrapper>
			</HeaderWrapper>

			<Content>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
				deserunt natus omnis quia quis veniam esse dolorum quidem beatae velit
				inventore, rerum similique perspiciatis provident molestias excepturi
				explicabo! Facere, praesentium.
			</Content>

			<ImageWrapper>
				<Image source={image1} />
			</ImageWrapper>
		</Container>
	);
}
