import {
	FontAwesome,
	FontAwesome5,
	Ionicons,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import React from 'react';
import { image1 } from '../assets';
import HeaderScreen from '../components/HeaderScreen';
import Post from '../components/Post';
import {
	Container,
	GroupItem,
	GroupName,
	Image,
	Item,
	List,
	ListGroup,
	Text,
	Posts,
} from './Group.style';

export default function Group() {
	const data = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<Container>
			<HeaderScreen
				title="Group"
				icons={[
					<FontAwesome name="plus-circle" size={22} color="black" />,
					<Ionicons name="md-settings-sharp" size={20} color="black" />,
					<FontAwesome name="search" size={20} color="black" />,
				]}
			/>

			<List>
				<Item>
					<MaterialCommunityIcons
						name="account-group"
						size={18}
						color="black"
					/>
					<Text>Your groups</Text>
				</Item>
				<Item>
					<FontAwesome5 name="search-location" size={18} color="black" />
					<Text>Discover</Text>
				</Item>
				<Item>
					<MaterialCommunityIcons
						name="email-newsletter"
						size={18}
						color="black"
					/>
					<Text>Invitation</Text>
				</Item>
			</List>

			<ListGroup
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={() => (
					<GroupItem>
						<Image source={image1} />
						<GroupName numberOfLines={2}>
							Lorem ipsum dolor sit amet aef
						</GroupName>
					</GroupItem>
				)}
				keyExtractor={(item: any) => `${item}`}
			/>

			<Posts
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={() => <Post />}
				keyExtractor={(item: any) => `${item}`}
			/>
		</Container>
	);
}
