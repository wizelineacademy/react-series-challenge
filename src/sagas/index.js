import { all } from 'redux-saga/effects'
import { watchSearchRequested } from './search'

function* rootSaga() {
    yield all([
        watchSearchRequested()
    ])
}

export default rootSaga