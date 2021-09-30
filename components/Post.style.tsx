import styled from 'styled-components/native';
import { topLg } from '../constants';

const AlignItem = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Container = styled.View`
	display: flex;
	margin-top: ${topLg};
	background-color: #fff;
`;

export const HeaderWrapper = styled(AlignItem)``;

export const TitleWrapper = styled(AlignItem)``;

export const IconsWrapper = styled(AlignItem)`
	margin-left: auto;
`;

export const UserInfo = styled.View`
	margin-left: 8px;
`;

export const Username = styled.Text`
	font-weight: bold;
`;

export const Time = styled.Text`
	color: #999;
`;

export const Content = styled.Text``;

export const ImageWrapper = styled.View`
	display: flex;
	flex-direction: row;
`;

export const Image = styled.Image`
	width: 100%;
	aspect-ratio: ${3 / 2};
`;
