import trending from '../trending'
import trendingActions from '../../actions/trending'

describe('active gif reducer', () => {
  it('should return the initialState', () => {
    expect(trending(undefined,{})).toEqual([])
  })
  it('should handle REQUEST_TRENDING_GIFS_SUCCESS', () => {
    const action = trendingActions.creators.requestTrendingGifsSuccess({})
    expect(trending(undefined, action)).toEqual({})
  })
})
