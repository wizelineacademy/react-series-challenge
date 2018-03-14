import { cloneableGenerator } from 'redux-saga/utils'
import { put } from 'redux-saga/effects'

import { onFetchById } from '../../src/sagas/detail'
import { detailFetchGiph, detailFetchGiphSuccess, detailFetchGiphFailed } from '../../src/actions'

jest.mock('../../src/services/GIPHY')

describe('detail sagas', () => {
  it('Puts failed when fetch fails', () => {
    const gen = cloneableGenerator(onFetchById)(detailFetchGiph('1234'))
    gen.next()
    expect(gen.next({json: () => {throw Error()}}).value).toEqual(put(detailFetchGiphFailed()))
  })

  it('Puts success action when fetch works', () => {
    const gen = cloneableGenerator(onFetchById)(detailFetchGiph('1234'))
    gen.next()
    const body = {data: {}}
    gen.next({json: () => body})
    expect(gen.next(body).value).toEqual(put(detailFetchGiphSuccess({})))
  })
})
