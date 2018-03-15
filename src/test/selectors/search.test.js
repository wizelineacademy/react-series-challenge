import {
  getQuery,
  isSearching,
  getSearchGifs
} from '../../selectors/search';

const search = {
  query: 'foo',
  searching: true,
  gifs: [
    { id: 1 },
    { id: 2 }
  ]
};

const state = {
  search
};

describe('search selectors', () => {
  describe('getQuery', () => {
    it('should get the query from search state', () => {
      expect(getQuery(state)).toEqual(search.query);
    });
  });

  describe('isSearching', () => {
    it('should get searching field from search state', () => {
      expect(isSearching(state)).toEqual(search.searching);
    });
  });

  describe('getSearchGifs', () => {
    it('should get gifs from search state', () => {
      expect(getSearchGifs(state)).toEqual(search.gifs);
    });
  });
});
