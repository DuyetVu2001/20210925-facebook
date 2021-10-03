import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { pX } from '../constants';

const width = Dimensions.get('window').width;

const AlignItem = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Container = styled.ScrollView``;

export const List = styled(AlignItem)`
	justify-content: space-between;
	padding: ${`0 ${pX}`};
	background-color: #fff;
`;

export const Item = styled(AlignItem)`
	padding: 6px 14px;
	border-radius: 36px;
	background-color: #ddd;
`;

export const Text = styled.Text`
	font-size: 15px;
	font-weight: 700;
	margin-left: 6px;
`;

export const ListGroup = styled.FlatList`
	padding: 16px 0;
	background-color: white;
	margin-bottom: -4px;
`;

export const GroupItem = styled.View`
	position: relative;
	flex-direction: row;
	width: ${width / 4 + 'px'};
	margin: 0 4px;
`;

export const Image = styled.Image`
	border-radius: 8px;
	width: 100%;
	aspect-ratio: 1;
`;

export const GroupName = styled.Text`
	position: absolute;
	bottom: 4px;
	left: 4px;
	right: 4px;
	color: white;
`;

export const Posts = styled.FlatList``;
