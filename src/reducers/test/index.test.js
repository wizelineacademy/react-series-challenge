import reducers from '..'
import { createStore } from 'redux';

let store = createStore(reducers)

describe('test root reducer', () => {
  it('should initialize correctly', () => {
  expect(store.getState().favoriteGifs).toEqual([])
  expect(store.getState().activeGif).toEqual({})
  expect(store.getState().trendingGifs).toEqual([])
  expect(store.getState().searchGifs).toEqual([])
  })
})
