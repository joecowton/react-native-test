// @flow

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

type State = {
	albums: Array<Object>
}

type Props = {}

class AlbumList extends Component<Props, State> {
	state = { albums: [] };

	componentWillMount() {
		axios
			.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(res => this.setState({ albums: res.data }));
	}

	renderAlbums() {
		const { albums } = this.state;
		return albums.map(album => (
			<AlbumDetail key={album.title} album={album} />
		));
	}

	render() {
		return <ScrollView>{this.renderAlbums()}</ScrollView>;
	}
}

export default AlbumList;
