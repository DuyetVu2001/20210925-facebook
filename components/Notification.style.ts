import styled from 'styled-components/native';
import { pX } from '../constants';

const AlignItem = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Container = styled.View`
	flex-direction: row;
	align-items: flex-start;
	padding: ${`8px ${pX}`};
`;

export const ContentWrapper = styled.View`
	flex: 1;
`;

export const IconWrapper = styled(AlignItem)`
	justify-content: center;
	width: 34px;
	height: 34px;
	border-radius: 36px;
	/*  */
	/* background-color: #ccc; */
`;

export const Text = styled.Text`
	padding: 2px 4px 2px 12px;
`;
