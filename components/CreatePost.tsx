import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { image1 } from '../assets';
import { Avatar } from '../styles/index.styles';
import {
	ActionItem,
	ActionSeparate,
	ActionText,
	ActionWrapper,
	Container,
	InputWrapper,
	Separate,
	StatusText,
	TouchableOpacity,
} from './CreatePost.style';

const CreatePost = () => {
	return (
		<Container>
			<InputWrapper>
				<Avatar source={image1}></Avatar>

				<TouchableOpacity activeOpacity={0.6}>
					<StatusText>What are you thinking?</StatusText>
				</TouchableOpacity>
			</InputWrapper>

			<Separate />

			<ActionWrapper>
				<ActionItem>
					<AntDesign name="stepforward" size={18} color="red" />
					<ActionText>Streamming</ActionText>
				</ActionItem>
				<ActionSeparate />
				<ActionItem>
					<AntDesign name="stepforward" size={18} color="green" />
					<ActionText>Pictures</ActionText>
				</ActionItem>
				<ActionSeparate />
				<ActionItem>
					<AntDesign name="stepforward" size={18} color="purple" />
					<ActionText>Rooms</ActionText>
				</ActionItem>
			</ActionWrapper>
		</Container>
	);
};

export default CreatePost;
