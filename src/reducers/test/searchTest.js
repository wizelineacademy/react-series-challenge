/**
 * @jest-environment node
 */

import search from '../search'
import searchActions from '../../actions/search'

describe('active gif reducer', () => {
  it('should return the initialState', () => {
    expect(search(undefined,{})).toEqual([])
  })
  it('should handle REQUEST_SEARCH_GIFS_SUCCESS', () => {
    const action = searchActions.creators.requestSearchGifsSuccess({})
    expect(search(undefined, action)).toEqual({})
  })
  it('should handle SEARCH_FAVS_SUCCESS', () => {
    const action = searchActions.creators.searchFavsSuccess({})
    expect(search(undefined, action)).toEqual({})
  })
})
