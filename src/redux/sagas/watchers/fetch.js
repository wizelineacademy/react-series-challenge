import { put, call, takeEvery, select } from 'redux-saga/effects';

// RedursDic
import reducersDic from "./../../constants/reducersDic";
import selectors from "./../../selectors/";

const baseUrl = 'https://api.giphy.com/v1/gifs/';

function* fetchData  (url)  {
    return yield fetch(url)
        .then(response => response.json())
}

function* fetchingData(action) {
    try {
        yield put({ type: reducersDic.FETCH_START });

        const type = yield select(selectors.api_type);
        const url = `${baseUrl}${type}?api_key=${process.env.YOUR_API_KEY}&limit=25&rating=G`;
        const data = yield call(fetchData,url);

        yield put({ type: reducersDic.FETCH_DATA, payload: { data } });
    } catch (error) {
        yield put({ type: reducersDic.FETCH_ERROR, payload: { error } });
    }finally {
        yield put({ type: reducersDic.FETCH_END})
    }
}

export default function* watchFetchData() {
    yield takeEvery(reducersDic.FETCH_REQUEST, fetchingData);
}