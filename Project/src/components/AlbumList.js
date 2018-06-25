// @flow
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import * as actions from '../actions';

type State = {
	albums: Array<*>,
};

type Props = {};

class AlbumList extends Component<Props, State> {
	state = { albums: [] };

	componentWillMount() {
		this.props.fetchData('251117');
	}

	renderAlbums() {
		return this.props.data.map(album => (
			<AlbumDetail key={album.id} album={album} />
		));
	}

	render() {
		return <ScrollView>{this.renderAlbums()}</ScrollView>;
	}
}

function mapStateToProps(state) {
	console.log('state', state	);
	return { data: 	state.data };
}

export default connect(
	mapStateToProps,
	actions
)(AlbumList);
