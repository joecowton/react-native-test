import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
