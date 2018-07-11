import contentActions from '../../actions/content'

const {types} = contentActions
const { actions } = contentActions

describe('test content actions', () => {
  it('start loading action', () => {
    const action = actions.startLoading()
    expect(action).toEqual({type: types.CONTENT_START_LOADING, payload:{}})
  })
  it('fetched content action', () => {
    const action = actions.fetchedContent()
    expect(action).toEqual({type: types.CONTENT_FETCHED, payload:{}})
  })
  it('fetched content error action', () => {
    const action = actions.fetchedContentError()
    expect(action).toEqual({type: types.CONTENT_FETCHED_ERROR, payload:{}})
  })
  it('add to fav action', () => {
    const action = actions.addToFavContent()
    expect(action).toEqual({type: types.CONTENT_ADD_FAV, payload:{}})
  })
  it('remove fav action', () => {
    const action = actions.removeFavContent()
    expect(action).toEqual({type: types.CONTENT_REMOVE_FAV, payload:{}})
  })
  it('start search action', () => {
    const action = actions.startSearch()
    expect(action).toEqual({type: types.CONTENT_SEARCH_START, payload:{}})
  })
})
