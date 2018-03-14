import {expect} from 'chai'
import { createStore } from 'redux';
import rootReducer from '../src/reducers';

describe('Test root reducer', () => {
  it('show initial state', () => {
    const store = createStore(rootReducer)
    const expectedState = {
      gimphyList: { giphys: [], details: {} },
      favorites: {}
    }
    expect(store.getState()).to.be.deep.equal(expectedState)
  })
})