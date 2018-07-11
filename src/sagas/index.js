import { all } from 'redux-saga/effects'
import { watchTrending } from './trending'
import { watchGif } from './gif'
import { watchSearch } from './search'
import { watchFavorites } from './favorites'

function* rootSaga() {
    yield all([
      watchTrending(),
      watchGif(),
      watchFavorites(),
      watchSearch()
    ])
}

export default rootSaga
