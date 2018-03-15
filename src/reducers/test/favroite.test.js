import favorites from '../favorites'
import favoritesActions from '../../actions/favorites'

describe('active gif reducer', () => {
  it('should return the initialState', () => {
    expect(favorites(undefined,{})).toEqual([])
  })
  it('should add FAVORITE when empty', () => {
    const state = [{id: 1}]
    const action = favoritesActions.creators.setFavorite(state[0])
    expect(favorites(undefined, action)).toEqual(state)
  })
  it('should remove favorite if already there', () => {
    const state = [{id: 1}]
    const action = favoritesActions.creators.setFavorite(state[0])
    expect(favorites(state, action)).toEqual([])
  })
})
