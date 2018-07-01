// @flow
import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import releaseReducer from './releaseReducer';

export default combineReducers({
    data: dataReducer,
    release: releaseReducer,
});
