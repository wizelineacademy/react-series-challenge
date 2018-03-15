import {expect} from 'chai'

import {
  fetchTrend,
  addFavorite,
  deleteFavorite,
  fetchDetails,
  searchOnWeb
} from '../actions'

import {
  FETCH_TREND,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FETCH_DETAILS,
  SEARCH_ON_WEB
} from '../actions/types'

describe('Test for Actions creators', () => {
  it('evalutes fetchTrend type', () => {
    const action = fetchTrend()
    expect(action.type).to.be.equal(FETCH_TREND)
  })

  it('evalutes addFavorite type', () => {
    const dummyFavId = '12345'
    const action = addFavorite(dummyFavId)
    expect(action.type).to.be.equal(ADD_FAVORITE)
  })

  it('evalutes addFavorite payload', () => {
    const dummyFavId = '12345'
    const action = addFavorite(dummyFavId)
    expect(action.favorite).to.be.equal(dummyFavId)
  })

  it('evalutes deleteFavorite type', () => {
    const dummyFavId = '12345'
    const action = deleteFavorite(dummyFavId)
    expect(action.type).to.be.equal(DELETE_FAVORITE)
  })

  it('evalutes deleteFavorite payload', () => {
    const dummyFavId = '12345'
    const action = deleteFavorite(dummyFavId)
    expect(action.favorite).to.be.equal(dummyFavId)
  })

  it('evalutes fetchDetails type', () => {
    const dummyGimphyId = '12345'
    const action = fetchDetails(dummyGimphyId)
    expect(action.type).to.be.equal(FETCH_DETAILS)
  })

  it('evalutes fetchDetails payload', () => {
    const dummyGimphyId = '12345'
    const action = fetchDetails(dummyGimphyId)
    expect(action.gimphyId).to.be.equal(dummyGimphyId)
  })

  it('evalutes searchOnWeb type', () => {
    const dummyQuery = 'dummy'
    const action = searchOnWeb(dummyQuery)
    expect(action.type).to.be.equal(SEARCH_ON_WEB)
  })

  it('evalutes searchOnWeb payload', () => {
    const dummyQuery = 'dummy'
    const action = searchOnWeb(dummyQuery)
    expect(action.query).to.be.equal(dummyQuery)
  })

})