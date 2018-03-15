import activeGif from '../activeGif'
import searchActions from '../../actions/search'

describe('active gif reducer', () => {
  it('should return the initialState', () => {
    expect(activeGif(undefined,{})).toEqual({})
  })

  it('should handle SEARCH_GIF_SUCCESS', () => {
    const action = searchActions.creators.searchGifSuccess({})
    expect(activeGif(undefined, action)).toEqual({})
  })
})
