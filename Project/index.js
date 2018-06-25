import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const App = () => {
	return (
		<Provider store={store}>
			<View style={{ flex: 1 }}>
				<Header headerText={'Albums'} />
				<AlbumList />
			</View>
		</Provider>
	);
};

export default App;

AppRegistry.registerComponent('Project', () => App);
