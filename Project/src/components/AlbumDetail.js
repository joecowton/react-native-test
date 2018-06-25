// @flow

import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

type AlbumType = {
	album: {
		title: ?String,
		artist: ?String,
		thumbnail_image?: String,
		image?: String,
		resource_url?: String,
	},
};

const AlbumDetail = ({ album }: AlbumType) => {
	const { title, artist, thumb, image, resource_url } = album;
	const {
		thumbnailStyle,
		headerContentStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		imageStyle,
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image style={thumbnailStyle} source={{ uri: thumb }} />
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image style={imageStyle} source={{ uri: thumb }} />
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(resource_url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null,
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
	},
	headerTextStyle: {
		fontSize: 18,
	},
};

export default AlbumDetail;
