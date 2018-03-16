// import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan'
import sagas from '../store/sagas'
import gifsData from './data/trendingMockData'
// import singleGif from './data/gifTestData'

describe('Sagas', () => {
  it('fetch trending works!', () => {
    fetch.mockResponse(JSON.stringify(gifsData))

    return expectSaga(sagas)
      .put({
        type: 'LOADING_START'
      })
      .put({
        type: 'FETCH_SUCCEEDED',
        trendingGifs: gifsData,
      })
      .put({
        type: 'LOADING_END'
      })
      .dispatch({ type: 'FETCH_TRENDING' })
      .run();
  })

  it('fetch by id works!', () => {
    fetch.mockResponse(JSON.stringify(gifsData))

    return expectSaga(sagas)
      .put({
        type: 'LOADING_START'
      })
      .put({
        type: 'FETCHED_SINGLE',
        singleGif: gifsData,
      })
      .put({
        type: 'LOADING_END'
      })
      .dispatch({ type: 'FETCH_BY_ID' })
      .run();
  })

  it('fetch search works!', () => {
    fetch.mockResponse(JSON.stringify(gifsData))

    return expectSaga(sagas)
      .put({
        type: 'LOADING_START'
      })
      .put({
        type: 'FETCHED_SEARCH',
        searchGifs: gifsData,
      })
      .put({
        type: 'LOADING_END'
      })
      .dispatch({ type: 'FETCH_SEARCH' })
      .run();
  })
})
