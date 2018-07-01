// @flow
import {
    FETCH_DATA,
    FETCH_RELEASE,
    FETCH_ARTIST,
    SUBMIT_RELEASE,
} from '../actions/types';

type State = Array<{
    id: number,
    text: string,
    completed: boolean,
    error: ?string,
}>;

type Payload = {
    data: {
        artist: string,
        catno: string,
        format: string,
        id: Number,
        resource_url: string,
        status: string,
        thumb: string,
        title: string,
        year: Number,
    },
};

type FetchDataAction = { type: typeof FETCH_DATA, payload?: Payload };
type FetchArtistAction = { type?: typeof FETCH_ARTIST, payload?: Payload };
type FetchReleaseAction = { type?: typeof FETCH_RELEASE, payload?: Payload };
type SubmitReleaseAction = { type?: typeof SUBMIT_RELEASE, payload?: Payload };

type Action =
    | FetchDataAction
    | FetchArtistAction
    | SubmitReleaseAction
    | FetchReleaseAction;

export default function(state: State = [], action: Action) {
    switch (action.type) {
        case FETCH_DATA:
            return [...state, ...action.payload];
        case FETCH_ARTIST:
            return action.payload;
        case SUBMIT_RELEASE:
            return action.payload;
        case FETCH_RELEASE:
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}
