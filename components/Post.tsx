import {
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome5,
	Fontisto,
} from '@expo/vector-icons';
import React from 'react';
import { image1 } from '../assets';
import { Avatar } from '../styles/index.styles';
import {
	Action,
	ActionText,
	ActionWrapper,
	Container,
	Content,
	HeaderWrapper,
	IconsWrapper,
	IconWrapper,
	Image,
	ImageWrapper,
	LeftStatus,
	RightStatus,
	Separate,
	StatusWrapper,
	Text,
	TimeWrapper,
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
						<TimeWrapper>
							<Text>2 hour</Text>
							<Entypo name="dot-single" size={12} color="lightslategrey" />
							<Fontisto name="world-o" size={12} color="lightslategrey" />
						</TimeWrapper>
					</UserInfo>
				</TitleWrapper>

				<IconsWrapper>
					<IconWrapper>
						<Entypo
							name="dots-three-horizontal"
							size={22}
							color="lightslategrey"
						/>
					</IconWrapper>
					<IconWrapper>
						<Feather name="x" size={22} color="lightslategrey" />
					</IconWrapper>
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

			<StatusWrapper>
				<LeftStatus>
					<EvilIcons name="like" size={22} color="lightslategrey" />
					<ActionText style={{ marginLeft: 0 }}>Like</ActionText>
				</LeftStatus>

				<RightStatus>
					<Text>18 comments</Text>
					<Entypo name="dot-single" size={12} color="lightslategrey" />
					<Text>18 shares</Text>
				</RightStatus>
			</StatusWrapper>

			<Separate />

			<ActionWrapper>
				<Action>
					<EvilIcons name="like" size={32} color="lightslategrey" />
					<ActionText style={{ marginLeft: 0 }}>Like</ActionText>
				</Action>
				<Action>
					<FontAwesome5 name="comment-alt" size={16} color="lightslategrey" />
					<ActionText>Comment</ActionText>
				</Action>
				<Action>
					<FontAwesome5 name="share-square" size={16} color="lightslategrey" />
					<ActionText>Share</ActionText>
				</Action>
			</ActionWrapper>
		</Container>
	);
}
