import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

function* helloSaga() {
  yield console.log('Hello Sagas!')
}

export default function* rootSaga() {
  yield all([
    helloSaga()
  ])
}