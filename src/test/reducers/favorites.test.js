import favorites from '../../reducers/favorites';
import {
  getFavoriteItems,
  addFavorite,
  removeFavorite,
  searchFavorites
} from '../../actions';

let state;

describe('Reducer: favorites', () => {
  beforeEach(() => {
    state = {
      items: {
        gif1: { title: 'one' },
        gif2: { title: 'two' },
        gif3: { title: 'one' }
      },
      filtered: {}
    };
  });

  it('returns default status', () => {
    const reduced = favorites(undefined, { type: 'none' });
    expect(reduced).toEqual({ items: {} });
  })

  it('gets favorite items without search results', () => {
    const action = getFavoriteItems();
    const reduced = favorites(state, action);
    expect(reduced.items).toBeDefined();
    expect(reduced.filtered).toBeUndefined();
  });

  it('searches for an item in favorites', () => {
    const action = searchFavorites('two');
    const reduced = favorites(state, action);
    expect(reduced.filtered.gif2).toBeDefined();
  });

  it('adds item to favorites', () => {
    const action = addFavorite({ id: 'gif4' });
    const reduced = favorites(state, action);
    expect(reduced.items.gif4).toBeDefined();
  });

  it('removes item from favorites', () => {
    const action = removeFavorite('gif2');
    const reduced = favorites(state, action);
    expect(reduced.items.gif2).toBeUndefined();
  });
});
