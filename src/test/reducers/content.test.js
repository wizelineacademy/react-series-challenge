import contentActions from '../../actions/content'
import contentReducer from '../../reducers/content'
import jest from 'jest'

const { types } = contentActions

describe('test content reducer', () => {
  it('CONTENT_START_LOADING', () => {
    const state = {}
    const newState = contentReducer(state, {type: types.CONTENT_START_LOADING, payload: {}})
    expect(newState).toEqual({ isLoading: true})
  })
  it('CONTENT_FETCHED', () => {
    const state = {}
    const newState = contentReducer(state, {type: types.CONTENT_FETCHED, payload: {data:[{id: 'item1'}]}})
    expect(newState).toEqual({ isLoading: false, data:{ item1:{ id: 'item1'}}})
  })
  it('CONTENT_FETCHED_ERROR', () => {
    const state = {}
    const newState = contentReducer(state, {type: types.CONTENT_FETCHED_ERROR, payload: {}})
    expect(newState).toEqual({ isLoading: false})
  })
  it('CONTENT_ADD_FAV', () => {
    const state = {
      favorites: {}
    }
    const newState = contentReducer(state, {type: types.CONTENT_ADD_FAV, payload: {id: 'item1'}})
    expect(newState).toEqual({ favorites:{ item1:{id:'item1'}}})
  })
  it('CONTENT_REMOVE_FAV', () => {
    const state = {
      favorites: {
        item1: {}
      }
    }
    const newState = contentReducer(state, {type: types.CONTENT_REMOVE_FAV, payload: {id: 'item1'}})
    expect(newState).toEqual({ favorites:{}})
  })
})

