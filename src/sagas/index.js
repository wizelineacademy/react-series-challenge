import { all } from 'redux-saga/effects'
import { detailWatchers } from './detail'
import { homeWatchers } from './home'

export default function * rootSaga() {
  yield all([
    ...detailWatchers,
    ...homeWatchers
  ])
}
