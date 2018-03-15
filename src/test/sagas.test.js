import {expect} from 'chai'
import rootSaga, {
  fetchTrend,
  AddingToFavorites,
  deletingFromFavorites,
  fetchDetail,
  searchOnWeb,
  watchFetchTrend,
  watchAddFavorite,
  watchDeleteFavorite,
  watchFetchDetails,
  watchSearchOnWeb
} from '../sagas'

import {
  FETCHED_TREND,
  FETCH_TREND,
  ADD_FAVORITE,
  ADDED_FAVORITE,
  DELETE_FAVORITE,
  DELETED_FAVORITE,
  FETCH_DETAILS,
  FETCHED_DETAILS,
  SEARCH_ON_WEB,
  SEARCHED_ON_WEB
} from '../actions/types'

describe('Test for sagas middleware', () => {

  it('should handle fetchTrend', () => {
    const dummyAction = {
      type: FETCH_TREND
    }
    const dummyAxiosResponse = {
      data: {
        data: [{dummyId: 'dummyId', dummyTitle: 'dummyTitle'}]
      } 
    }
    const expectedAction = {
      type: FETCHED_TREND,
      payload: [{dummyId: 'dummyId', dummyTitle: 'dummyTitle'}]
    }
    const gen = fetchTrend(dummyAction)
    gen.next() // Axios call
    expect(gen.next(dummyAxiosResponse).value.PUT.action).to.be.deep.equal(expectedAction)
  })

  it('should handle AddingToFavorites', () => {
    const dummyAction = {
      type: ADD_FAVORITE,
      favorite: {dummyId: 'dummyId', dummyTitle: 'dummyTitle'}
    }
    const expectedAction = {
      type: ADDED_FAVORITE,
      payload: {dummyId: 'dummyId', dummyTitle: 'dummyTitle'}
    }
    const gen = AddingToFavorites(dummyAction)
    expect(gen.next().value.PUT.action).to.be.deep.equal(expectedAction)
  })

  it('should handle deletingFromFavorites', () => {
    const dummyAction = {
      type: DELETE_FAVORITE,
      favorite: {dummyId: 'dummyId', dummyTitle: 'dummyTitle'}
    }
    const expectedAction = {
      type: DELETED_FAVORITE,
      payload: {dummyId: 'dummyId', dummyTitle: 'dummyTitle'}
    }
    const gen = deletingFromFavorites(dummyAction)
    expect(gen.next().value.PUT.action).to.be.deep.equal(expectedAction)
  })

  it('should handle fetchDetail 200', () => {
    const dummyAction = {
      type: FETCH_DETAILS,
      gimphyId: 'dummyID'
    }
    const dummyAxiosResponse = {
      data: {
        data: {dummyDetailId: 'dummyDetailId', dummyDetailTitle: 'dummyDetailTitle'}
      } 
    }
    const expectedAction = {
      type: FETCHED_DETAILS,
      payload: {dummyDetailId: 'dummyDetailId', dummyDetailTitle: 'dummyDetailTitle'}
    }
    const gen = fetchDetail(dummyAction)
    gen.next() // Axios call
    expect(gen.next(dummyAxiosResponse).value.PUT.action).to.be.deep.equal(expectedAction)
  })

  it('should handle fetchDetail 400', () => {
    const dummyAction = {
      type: FETCH_DETAILS,
      gimphyId: 'dummyID'
    }
    const dummyAxiosResponse = {
      data: {
        data: {dummyDetailId: 'dummyDetailId', dummyDetailTitle: 'dummyDetailTitle'}
      } 
    }
    const expectedAction = {
      type: FETCHED_DETAILS,
      payload: {}
    }
    const gen = fetchDetail(dummyAction)
    gen.next() // Axios call
    expect(gen.throw(dummyAxiosResponse).value.PUT.action).to.be.deep.equal(expectedAction)
  })

  it('should handle searchOnWeb', () => {
    const dummyAction = {
      type: SEARCH_ON_WEB,
      query: 'dummyQuery'
    }
    const dummyAxiosResponse = {
      data: {
        data: [{dummyDetailId: 'dummyId', dummyTitle: 'dummyTitle'}]
      } 
    }
    const expectedAction = {
      type: SEARCHED_ON_WEB,
      payload: [{dummyDetailId: 'dummyId', dummyTitle: 'dummyTitle'}]
    }
    const gen = searchOnWeb(dummyAction)
    gen.next() // Axios call
    expect(gen.next(dummyAxiosResponse).value.PUT.action).to.be.deep.equal(expectedAction)
  })

  it('should handle watchFetchTrend', () => {
    
    const gen = watchFetchTrend()
    expect(gen.next().value.FORK.args).to.be.deep.equal([ FETCH_TREND, fetchTrend ])
  })

  it('should handle watchAddFavorite', () => {
    
    const gen = watchAddFavorite()
    expect(gen.next().value.FORK.args).to.be.deep.equal([ ADD_FAVORITE, AddingToFavorites ])
  })

  it('should handle watchDeleteFavorite', () => {
    
    const gen = watchDeleteFavorite()
    expect(gen.next().value.FORK.args).to.be.deep.equal([ DELETE_FAVORITE, deletingFromFavorites ])
  })

  it('should handle watchFetchDetails', () => {
    
    const gen = watchFetchDetails()
    expect(gen.next().value.FORK.args).to.be.deep.equal([ FETCH_DETAILS, fetchDetail ])
  })

  it('should handle watchSearchOnWeb', () => {
    
    const gen = watchSearchOnWeb()
    expect(gen.next().value.FORK.args).to.be.deep.equal([ SEARCH_ON_WEB, searchOnWeb ])
  })

  it('evalute rootSaga list length', () => {
    
    const gen = rootSaga()
    expect(gen.next().value.ALL.length).to.be.equal(6)
  })

})