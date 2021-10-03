import styled from 'styled-components/native';
import { pX } from '../constants';

const AlignItem = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Header = styled(AlignItem)`
	justify-content: space-between;
	padding: ${`10px ${pX}`};
	border: 0.5px solid transparent;
	border-bottom-color: #ccc;

	background-color: #fff;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
`;

export const IconWrapper = styled(AlignItem)``;

export const Icon = styled(AlignItem)`
	justify-content: center;
	width: 38px;
	height: 38px;
	margin: 0 4px;
	border-radius: 36px;

	background-color: #ddd;
`;
