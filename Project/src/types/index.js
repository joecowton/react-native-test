export type AlbumType = {
    album: {
        title: ?String,
        artist: ?String,
        thumbnail_image?: String,
        image?: String,
        resource_url?: String,
        thumb?: string,
    },
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

export const FETCH_DATA: string = 'fetch_data';
export const FETCH_RELEASE: string = 'fetch_release';

type FetchReleaseAction = { type?: typeof FETCH_RELEASE, payload?: Payload };
type FetchDataAction = { type: typeof FETCH_DATA, payload?: Payload };
export type Action = FetchDataAction | FetchReleaseAction;
