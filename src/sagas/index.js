import { all } from 'redux-saga/effects'
import { watchSearchRequested } from './search'
import { watchFavoriteClicked } from './favorites'
import { watchForLocation } from './locations'
 
function* rootSaga() {
    yield all([
        watchSearchRequested(),
        watchFavoriteClicked(),
        watchForLocation()
    ])
}

export default rootSaga