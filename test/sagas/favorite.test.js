import { cloneableGenerator } from 'redux-saga/utils'
import { put } from 'redux-saga/effects'

import { fetchFavoritesIds, onFavoriteClick } from '../../src/sagas/favorite'
import {
  favoriteClick,
  favoriteFetchInitialGifs,
  favoriteFetchInitialGifsSuccess,
  favoriteFetchInitialGifsFailed
 } from '../../src/actions'

jest.mock('../../src/services/GIPHY')

describe('favorite sagas', () => {
  it('adds a favorite to localStorage', () => {
    const gen = cloneableGenerator(onFavoriteClick)(favoriteClick('123'))
    gen.next()
  })
  it('catchs error when adding favorite to localStorage', () => {
    const gen = cloneableGenerator(onFavoriteClick)(favoriteClick())
    gen.next()
  })
  it('fetchs favorites from localStorage when no favorites', () => {
    const gen = cloneableGenerator(fetchFavoritesIds)(favoriteFetchInitialGifs())
    gen.next()
  })

  it('puts favorites from localStorage when there are favorites', () => {
    let gen = cloneableGenerator(onFavoriteClick)(favoriteClick('123'))
    gen.next()
    gen = cloneableGenerator(fetchFavoritesIds)(favoriteFetchInitialGifs())
    const body = {data: {}}
    gen.next()
    gen.next({json: () => body})
    expect(gen.next(body).value).toEqual(put(favoriteFetchInitialGifsSuccess({})))
    gen.next()
  })

  it('puts error when trying to get favorites from localStorage', () => {
    let gen = cloneableGenerator(onFavoriteClick)(favoriteClick('123'))
    gen.next()
    gen = cloneableGenerator(fetchFavoritesIds)(favoriteFetchInitialGifs())
    const body = {data: {}}
    gen.next()
    gen.next({json: () => body})
    expect(gen.next().value).toEqual(put(favoriteFetchInitialGifsFailed()))
    gen.next()
  })
})
