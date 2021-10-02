import styled from 'styled-components/native';
import { pX, topMd } from '../constants';
import { Avatar } from '../styles/index.styles';

export const Container = styled.View`
	padding: 16px 0;
	margin-top: ${topMd};
	background-color: #fff;
`;

export const Title = styled.Text`
	font-weight: bold;
	margin-bottom: 6px;
	margin-left: ${pX};
`;

export const FlatList = styled.FlatList``;

export const MeetingAvatar = styled(Avatar)`
	margin-right: 10px;
`;

export const ButtonWrapper = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-right: 10px;
	margin-left: ${pX};
`;

export const CreateButton = styled.Text`
	padding: 6px 12px;
	border-radius: 6px;

	color: blueviolet;
	background-color: aquamarine; /* Primary bg color */
`;
