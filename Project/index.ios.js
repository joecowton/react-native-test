import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
	return (
		<View>
			<Header headerText={'Albums'} />
			<AlbumList />
		</View>
	);
};

export default App;

AppRegistry.registerComponent('Project', () => App);
