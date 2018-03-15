import reducer from '../../src/reducers/favorites';
import actions from '../../src/actions/favorites';

describe('Favorites reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        searchTerm: '',
        filtered: {},
        favorites: {}
      }
    );
  });


  it('test FAVORITES_UPDATE ', () => {
    expect(reducer(undefined, actions.creators.updateFavorites('hello'))).toEqual(
      {
        searchTerm: '',
        filtered: {},
        favorites: 'hello'
      }
    );
  });
});