import styled from 'styled-components/native';

export const Container = styled.View`
	display: flex;
	background-color: #fff;
`;

export const InputWrapper = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px 16px;
`;

// FIX ASPECT IMAGE
export const Image = styled.Image`
	width: 100%;
	height: 100%;
`;

export const TouchableOpacity = styled.TouchableOpacity`
	flex: 1;
	margin-left: 8px;
	border: 1px solid #ccc;
	border-radius: 36px;
`;

export const StatusText = styled.Text`
	padding: 6px 16px;
`;

export const Separate = styled.View`
	height: 1px;
	background-color: #ccc;
`;

// BORDER TOP
export const ActionWrapper = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ActionItem = styled.View`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 8px 0;
`;

export const ActionText = styled.Text`
	color: gray;
	font-size: 14px;
	margin-left: 4px;
`;

export const ActionSeparate = styled.View`
	width: 1px;
	height: 18px;
	background-color: #bbb;
`;
