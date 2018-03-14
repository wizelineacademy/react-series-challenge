import { all } from 'redux-saga/effects'
import { favoritesWatchers } from './favorite'
import { detailWatchers } from './detail'
import { homeWatchers } from './home'

export default function * rootSaga() {
  yield all([
    ...favoritesWatchers,
    ...detailWatchers,
    ...homeWatchers
  ])
}
