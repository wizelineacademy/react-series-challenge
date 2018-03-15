/**
 * @jest-environment node
 */
import { cloneableGenerator } from 'redux-saga/utils'
import { loadTrendingGifs } from '../trending'
import trendingActions from '../../actions/trending'

describe('favorite sagas', () => {
  it('loadSearchGif', () => {
    const gen = cloneableGenerator(loadTrendingGifs)(trendingActions.creators.requestTrendingGifs())
    gen.next()
  })
})
