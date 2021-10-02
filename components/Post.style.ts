import styled from 'styled-components/native';
import { pX, pY, topLg } from '../constants';

const AlignItem = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Container = styled.View`
	display: flex;
	margin-top: ${topLg};
	background-color: #fff;
`;

export const HeaderWrapper = styled(AlignItem)`
	padding: ${`${pY} ${pX}`};
`;

export const TitleWrapper = styled(AlignItem)``;

export const IconsWrapper = styled(AlignItem)`
	margin-left: auto;
`;

export const IconWrapper = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	border-radius: 36px;
`;

export const UserInfo = styled.View`
	margin-left: 8px;
`;

export const Username = styled.Text`
	font-weight: bold;
`;

export const TimeWrapper = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Text = styled.Text`
	color: #999;
	font-size: 13px;
`;

export const Content = styled.Text`
	padding: ${`4px ${pX} 10px`};
`;

export const ImageWrapper = styled.View`
	display: flex;
	flex-direction: row;
`;

export const Image = styled.Image`
	width: 100%;
	aspect-ratio: ${3 / 2};
`;

// STATUS
export const StatusWrapper = styled(AlignItem)`
	justify-content: space-between;
	padding: ${`12px ${pX}`};
`;

export const LeftStatus = styled(AlignItem)``;

export const RightStatus = styled(AlignItem)``;

export const Separate = styled.View`
	height: 1px;
	background-color: #ccc;
`;

// ACTIONS
export const ActionWrapper = styled(AlignItem)``;

export const Action = styled(AlignItem)`
	flex: 1;
	justify-content: center;
	padding: 10px 0;
`;

export const ActionText = styled(Text)`
	margin-left: 6px;
`;
