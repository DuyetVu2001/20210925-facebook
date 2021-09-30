import styled from 'styled-components/native';

export const Avatar = styled.Image`
	width: ${(prop) => (prop.width ? `${prop.width}px` : '40px')};
	height: ${(prop) => (prop.height ? `${prop.height}px` : '40px')};
	border-radius: 36px;
`;
