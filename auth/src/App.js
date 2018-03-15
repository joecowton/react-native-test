import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyA-ZsHBLb3NMCgYEjSEdyHzGpUx8etU_io',
			authDomain: 'auth-ed6bb.firebaseapp.com',
			databaseURL: 'https://auth-ed6bb.firebaseio.com',
			projectId: 'auth-ed6bb',
			storageBucket: 'auth-ed6bb.appspot.com',
			messagingSenderId: '296036634912'
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
