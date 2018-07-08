import { take, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

function* watchGifs() {
    // TODO: Implement fetching
    yield takeEvery("AN_ACTION", () => console.log("Requestiong gifs..."));
}
function* rootSaga(): SagaIterator {
    // TODO: implement sagas
    yield* watchGifs();
}

export default rootSaga;