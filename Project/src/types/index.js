import { FETCH_RELEASE, FETCH_DATA } from '../actions/types';

export type AlbumType = {
    title: ?string,
    artist: ?string,
    thumbnail_image?: string,
    image?: string,
    resource_url?: string,
    thumb?: string,
};

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

export type State = Array<{
    id: number,
    text: string,
    completed: boolean,
    error: ?string,
}>;

type FetchReleaseAction = { type?: typeof FETCH_RELEASE, payload?: Payload };
type FetchDataAction = { type: typeof FETCH_DATA, payload?: Payload };
export type Action = FetchDataAction | FetchReleaseAction;
