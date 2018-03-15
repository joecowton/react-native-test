import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: false };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyA-ZsHBLb3NMCgYEjSEdyHzGpUx8etU_io',
			authDomain: 'auth-ed6bb.firebaseapp.com',
			databaseURL: 'https://auth-ed6bb.firebaseio.com',
			projectId: 'auth-ed6bb',
			storageBucket: 'auth-ed6bb.appspot.com',
			messagingSenderId: '296036634912'
		});

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>Log out</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
