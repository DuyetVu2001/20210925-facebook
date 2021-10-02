import styled from 'styled-components/native';
import { pX } from '../constants';

const AlignItem = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Container = styled.View``;

export const Header = styled(AlignItem)`
	justify-content: space-between;
	padding: ${`0 ${pX}`};
	margin-top: 8px;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
`;

export const Text = styled.Text`
	padding: ${`0 ${pX}`};
	margin-top: 24px;
	margin-bottom: 6px;

	font-size: 16px;
	font-weight: bold;
`;

export const IconWrapper = styled(AlignItem)`
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 36px;

	background-color: #ccc;
`;

export const FlatList = styled.FlatList``;
