import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Avatar } from '../styles/index.styles';

const width = Dimensions.get('window').width;

export const Container = styled.View`
	width: ${width / 3.3 + 'px'};
	margin: 2px;
`;

export const Wrapper = styled.View`
	position: relative;

	display: flex;
	flex-direction: row;

	border: 1px solid #ccc;
	border-radius: 12px;
	overflow: hidden;
`;

export const Image = styled.Image`
	width: 100%;
	aspect-ratio: ${10 / 19};
	/* resize-mode: cover; */
`;

export const StoryAvatar = styled(Avatar)`
	position: absolute;
	z-index: 1;
	top: 6px;
	left: 6px;
`;

export const Username = styled.Text`
	position: absolute;
	z-index: 1;
	bottom: 8px;
	left: 10px;

	color: white;
`;
