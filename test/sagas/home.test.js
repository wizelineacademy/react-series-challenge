import { cloneableGenerator } from 'redux-saga/utils'
import { put } from 'redux-saga/effects'

import { onFetchTrendingGiphies, onFetchSearchGiphies } from '../../src/sagas/home'
import {
  homeFetchInitialGifs,
  homeFetchInitialGifsSuccess,
  homeFetchInitialGifsFailed,
  homeFetchSearchGifs,
  homeFetchSearchGifsSuccess,
  homeFetchSearchFailed
 } from '../../src/actions'

jest.mock('../../src/services/GIPHY')

describe('home sagas', () => {
  it('puts fetched trending giphies', () => {
    const gen = cloneableGenerator(onFetchTrendingGiphies)(homeFetchInitialGifs())
    gen.next()
    const body = {data: {}}
    gen.next({json: () => body})
    expect(gen.next(body).value).toEqual(put(homeFetchInitialGifsSuccess({})))
  })
  it('puts error when trending giphies fails', () => {
    const gen = cloneableGenerator(onFetchTrendingGiphies)(homeFetchInitialGifs())
    gen.next()
    const body = {data: {}}
    gen.next({json: () => body})
    expect(gen.next().value).toEqual(put(homeFetchInitialGifsFailed()))
  })
  it('puts fetched trending giphies', () => {
    const gen = cloneableGenerator(onFetchSearchGiphies)(homeFetchSearchGifs('query'))
    gen.next()
    const body = {data: {}}
    gen.next({json: () => body})
    expect(gen.next(body).value).toEqual(put(homeFetchSearchGifsSuccess({})))
  })
  it('puts error when trending giphies fails', () => {
    const gen = cloneableGenerator(onFetchSearchGiphies)(homeFetchSearchGifs('query'))
    gen.next()
    const body = {data: {}}
    gen.next({json: () => body})
    expect(gen.next().value).toEqual(put(homeFetchSearchFailed()))
  })
})
