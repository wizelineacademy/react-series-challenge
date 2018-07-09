import { put, call, takeEvery, select } from 'redux-saga/effects';

// actionsDic
import actions from "./../../constants/actions";
import selectors from "./../../selectors/";

const baseUrl = 'https://api.giphy.com/v1/gifs/';

function* fetchData  (url)  {
    return yield fetch(url)
        .then(response => response.json())
}

function* fetchingData(action) {
    try {
        yield put({ type: actions.FETCH_START });

        const word = yield select(selectors.fetch_word);

        // concatenate as a get method
        const query = (word.length > 0 ? `&q=${word}` : '');

        let url = `${baseUrl}${word.length > 0 ? 'search' : 'trending'}?api_key=${process.env.YOUR_API_KEY}&limit=10&rating=G${query}`;
        const data = yield call(fetchData,url);

        yield put({ type: actions.FETCH_DATA, payload: { data } });
    } catch (error) {
        yield put({ type: actions.FETCH_ERROR, payload: { error } });
    }finally {
        yield put({ type: actions.FETCH_END})
    }
}

export default function* watchFetchData() {
    yield takeEvery(actions.FETCH_REQUEST, fetchingData);
}