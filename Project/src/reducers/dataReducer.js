// @flow
import { FETCH_DATA } from '../actions/types';
import type { State, Action } from '../types';

export default function(state: State = [], action: Action) {
    switch (action.type) {
        case FETCH_DATA:
            return [...state, ...action.payload];
        default:
            return state;
    }
}
