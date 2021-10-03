import React from 'react';
import { Header, Icon, IconWrapper, Title } from './HeaderScreen.style';

type HeaderScreenProps = {
	title: string;
	icons: any[];
	isBorder?: boolean;
};

export default function HeaderScreen({ title, icons }: HeaderScreenProps) {
	return (
		<Header>
			<Title>{title}</Title>
			<IconWrapper>
				{icons.map((icon: any) => (
					<Icon>{icon}</Icon>
				))}
			</IconWrapper>
		</Header>
	);
}
