import { delay } from "redux-saga";
import { put, call, takeEvery } from 'redux-saga/effects';

// RedursDic
import reducersDic from "../../constants/reducersDic";

function* llamadaAjax  (url)  {
    yield delay(3000);
    return yield fetch(url)
        .then(response => response.json())
}

function* fetchData(action) {
    try {
        const data = yield call(llamadaAjax,'https://jsonplaceholder.typicode.com/posts/1');
        yield put({ type: 'FETCH_SUCCEEDED', data });
    } catch (error) {
        yield put({ type: 'FETCH_FAILED', error });
    }
}

export default function* watchFetchData() {
    yield takeEvery(reducersDic.FETCH_DATA, fetchData);
}