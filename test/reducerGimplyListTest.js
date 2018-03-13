import {expect} from 'chai'
import gimphyListReducer from '../src/reducers/gimphyList-reducer';
import {FETCHED_TREND, FETCHED_DETAILS, SEARCHED_ON_WEB} from '../src/actions/types'

describe('Test Gimphy reducer', () => {
  it('should return initial state', () => {
    const expectedState = {
      giphys: [],
      details: {}
    }
    expect(gimphyListReducer(undefined,{})).to.be.deep.equal(expectedState)
  })

  it('should handle FETCHED_TREND', () => {
    const expectedState = {
      giphys: [{id: 'dummyId', title: 'dummyTitle'}],
      details: {}
    }
    const action = {
      type: FETCHED_TREND,
      payload: [{id: 'dummyId', title: 'dummyTitle'}]
    }
    expect(gimphyListReducer(undefined, action)).to.be.deep.equal(expectedState)
  })

  it('should handle FETCHED_DETAILS', () => {
    const state = {
      giphys: [{id: 'dummyId', title: 'dummyTitle'}],
      details: {}
    }
    const expectedState = {
      giphys: [{id: 'dummyId', title: 'dummyTitle'}],
      details: {id: 'dummyDetailId', title: 'dummyDetailTitle'}
    }
    const action = {
      type: FETCHED_DETAILS,
      payload: {id: 'dummyDetailId', title: 'dummyDetailTitle'}
    }
    expect(gimphyListReducer(state, action)).to.be.deep.equal(expectedState)
  })

  it('should handle SEARCHED_ON_WEB', () => {
    const state = {
      giphys: [{id: 'dummyId', title: 'dummyTitle'}],
      details: {id: 'dummyDetailId', title: 'dummyDetailTitle'}
    }
    const expectedState = {
      giphys: [{id: 'dummySearchedId', title: 'dummySearchedTitle'}],
      details: {id: 'dummyDetailId', title: 'dummyDetailTitle'}
    }
    const action = {
      type: SEARCHED_ON_WEB,
      payload: [{id: 'dummySearchedId', title: 'dummySearchedTitle'}]
    }
    expect(gimphyListReducer(state, action)).to.be.deep.equal(expectedState)
  })

})