import { put, call, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';

// actionsDic
import actionsDic from "./../constants/actions";
import selectors from "./../selectors/";

import action from "./../actions";

const baseUrl = 'https://api.giphy.com/v1/gifs/';

export function* fetchingData() {
    try {
        debugger;
        yield put(action.fetchStart());

        const word = yield select(selectors.fetch_word);

        // concatenate as a get method
        const query = (word.length > 0 ? `&q=${word}` : '');

        let url = `${baseUrl}${word.length > 0 ? 'search' : 'trending'}?api_key=${process.env.YOUR_API_KEY}&limit=10&rating=G${query}`;
        const data = yield axios.get(url).then(response => (response.data));

        yield put(action.fetchData(data));
    } catch (error) {
        yield put(action.fetchError(error));
    }finally {
        yield put(action.fetchEnd());
    }
}

export default function* watchFetchData() {
    yield takeEvery(actionsDic.FETCH_REQUEST, fetchingData);
}