import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => {
	return <Header headerText={'Albums'} />;
};

export default App;

AppRegistry.registerComponent('Project', () => App);
