import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyBtujz_oEfD0hVNyP_7NsQAs7JFbsO1I94',
			authDomain: 'manager-15487.firebaseapp.com',
			databaseURL: 'https://manager-15487.firebaseio.com',
			projectId: 'manager-15487',
			storageBucket: 'manager-15487.appspot.com',
			messagingSenderId: '698138121463'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
