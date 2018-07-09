import { all } from 'redux-saga/effects'
import { watchSearchRequested } from './search'
import { watchFavoriteClicked, watchFavoritesChanged } from './favorites'
import { watchForLocation } from './locations'
import { watchTrendingGet } from './trending'

function* rootSaga() {
    yield all([
        watchSearchRequested(),
        watchFavoriteClicked(),
        watchForLocation(),
        watchTrendingGet(),
        watchFavoritesChanged()
    ])
}

export default rootSaga