// @flow
import { FETCH_RELEASE } from '../types';
import type { State, Action } from '../types';

export default function(state: State = [], action: Action) {
    switch (action.type) {
        case FETCH_RELEASE:
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}
