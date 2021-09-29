import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;

export const Container = styled.View`
	width: ${width / 4 + 'px'};
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
	aspect-ratio: ${9 / 16};
	/* resize-mode: cover; */
`;

export const AvatarWrapper = styled.View`
	position: absolute;
	z-index: 1;
	top: 6px;
	left: 6px;
`;
