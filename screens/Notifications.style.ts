import styled from 'styled-components/native';
import { pX } from '../constants';

export const Container = styled.View``;

export const Text = styled.Text`
	padding: ${`0 ${pX}`};
	margin-top: 16px;
	margin-bottom: 6px;

	font-size: 16px;
	font-weight: bold;
`;

export const FlatList = styled.FlatList`
	background-color: #fff;
`;
