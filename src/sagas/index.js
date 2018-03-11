import { all } from 'redux-saga/effects'
import { homeWatchers } from './home'

export default function * rootSaga() {
  yield all([
    ...homeWatchers
  ])
}
