import { all } from 'redux-saga/effects'
import { watchSearchRequested } from './search'
import { watchFavoriteClicked } from './favorites'
 
function* rootSaga() {
    yield all([
        watchSearchRequested(),
        watchFavoriteClicked()
    ])
}

export default rootSaga