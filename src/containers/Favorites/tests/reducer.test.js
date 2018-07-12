import reducer from '../reducer';
import actions from '../actions';

describe('Favorites container reducer', () => {
  it('should add a favorite id when sending FAVORITE_ID_ADD action', () => {
    const action = actions.creators.addFavoriteId({ id: 'id.1' });
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });

  it('should remove a favorite id when sending FAVORITE_ID_REMOVE action', () => {
    const initialState = {
      favoritesIds: ['id.1'],
      gifs: [{ id: 'id.1' }],
      filteredGifs: [{ id: 'id.1' }],
    };
    const action = actions.creators.removeFavoriteId({ id: 'id.1' });
    const newState = reducer(initialState, action);
    expect(newState).toMatchSnapshot();
  });

  it('should set the favorites in the reducer when calling FAVORITES_SET action', () => {
    const action = actions.creators.setFavorites([
      { id: 'id.1' },
      { id: 'id.2' },
    ]);
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });

  it('should filter the favorites gifs in reducer when calling FAVORITES_SEARCH action', () => {
    const action = actions.creators.setFavorites([
      { id: 'id.1', title: 'cat' },
      { id: 'id.2', title: 'dogo' },
    ]);
    const prevState = reducer(undefined, action);
    const searchAction = actions.creators.searchFavorites({ term: 'dogo' });
    const newState = reducer(prevState, searchAction);
    expect(newState).toMatchSnapshot();
  });

  it('should return all the favorite gifs in reducer when not sending a term in FAVORITES_SEARCH action', () => {
    const action = actions.creators.setFavorites([
      { id: 'id.1', title: 'cat' },
      { id: 'id.2', title: 'dogo' },
    ]);
    const prevState = reducer(undefined, action);
    const searchAction = actions.creators.searchFavorites({});
    const newState = reducer(prevState, searchAction);
    expect(newState).toMatchSnapshot();
  });

  it('should return the initial state', () => {
    const newState = reducer(undefined, { type: 'UNKNOWN.ACTION' });
    expect(newState).toMatchSnapshot();
  });
});
