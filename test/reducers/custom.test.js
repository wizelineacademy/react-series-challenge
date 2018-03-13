import reducer from '../../src/reducers/custom';
import actions from '../../src/actions/custom';

const mockFavoriteData = [
  'asdf',
  'zxcv',
  'qwer'
]

describe('giphy reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      favorites: mockFavoriteData
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ favorites: [] });
  });

  it('should handle FAVORITE_GIF when favoriting gif', () => {
    const payload = 'asdf';
    const favoriteGif = actions.creators.favoriteGif(payload)
    let newState = Object.assign({}, initialState);
    newState.favorites.splice(0, 1)
    expect(reducer(initialState, favoriteGif)).toEqual(newState);
  });

  it('should handle FAVORITE_GIF when unfavoriting gif', () => {
    const payload = 'tyui';
    const favoriteGif = actions.creators.favoriteGif(payload)
    let newState = Object.assign({}, initialState);
    newState.favorites.push(payload)
    expect(reducer(initialState, favoriteGif)).toEqual(newState);
  });
});