import {expect} from 'chai'
import favoritesReducer from '../src/reducers/favorites-reducer'
import {ADDED_FAVORITE, DELETED_FAVORITE} from '../src/actions/types'

describe('Test Favorites reducer', () => {

  it('test initial state', () => {
    const dummyState = {}
    expect(favoritesReducer(undefined, {})).to.be.deep.equal(dummyState)
  })

  it('should handle ADDED_FAVORITE', () => {
    const dummyAction = {
      type: ADDED_FAVORITE,
      payload: {id: 'dummyId', title: 'dummyTitle'}
    }
    const expectedState = {dummyId: {id: 'dummyId', title: 'dummyTitle'}}
    expect(favoritesReducer({}, dummyAction)).to.be.deep.equal(expectedState)
  })

  it('should handle DELETED_FAVORITE', () => {
    const dummyState = {
      dummyId1: {id: 'dummyId1', title: 'dummyTitle1'},
      dummyId2: {id: 'dummyId2', title: 'dummyTitle2'},
      dummyId3: {id: 'dummyId3', title: 'dummyTitle3'}
    }
    const dummyAction = {
      type: DELETED_FAVORITE,
      payload: {id: 'dummyId2', title: 'dummyTitle2'}
    }
    const expectedState = {
      dummyId1: {id: 'dummyId1', title: 'dummyTitle1'},
      dummyId3: {id: 'dummyId3', title: 'dummyTitle3'}
    }
    expect(favoritesReducer(dummyState, dummyAction)).to.be.deep.equal(expectedState)
  })

})