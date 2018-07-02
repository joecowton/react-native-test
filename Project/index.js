import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Header, ReleaseList } from './src/components/index';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const App = () => (
    <Provider store={store}>
        <View style={{ flex: 1 }}>
            <Header headerText="Albums" />
            <ReleaseList />
        </View>
    </Provider>
);

export default App;

AppRegistry.registerComponent('Project', () => App);
