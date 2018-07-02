// @flow
import axios from 'axios';
import { FETCH_DATA, FETCH_RELEASE } from './types';

const myKey = 'qeIeIQJgvnggcqHasaVV';
const mySecret = 'OndCkhIDXkQruNLkDZLYjrPyaeQbYhlc';

const ROOT_URL = 'https://api.discogs.com';

export const fetchData = (id: String) => async (dispatch: Function) => {
    const res = await axios.get(
        `${ROOT_URL}/labels/${id.toString()}/releases?key=${myKey}&secret=${mySecret}`
    );

    dispatch({ type: FETCH_DATA, payload: res.data.releases });
};

export const fetchRelease = (resourceUrl: String) => async (
    dispatch: Function
) => {
    const res = await axios.get(
        `${resourceUrl.toString()}?key=${myKey}&secret=${mySecret}`
    );
    dispatch({ type: FETCH_RELEASE, payload: res });
};
