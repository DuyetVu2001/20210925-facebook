import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { image1 } from '../assets';
import { Avatar } from '../styles/index.styles';
import {
	Container,
	ContentWrapper,
	IconWrapper,
	Text,
} from './Notification.style';

export default function Notification() {
	return (
		<Container>
			<Avatar width={60} height={60} source={image1} />

			<ContentWrapper>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mina eligendi
					repudiandae distinctio sunt venia msunt veniamsunt veniam
				</Text>
			</ContentWrapper>

			<IconWrapper>
				<Entypo name="dots-three-horizontal" size={16} color="lightslategrey" />
			</IconWrapper>
		</Container>
	);
}
