import {
  getFavorites,
  getFavorite,
  isFavorited,
  getFavoritesArray,
  getFilteredFavorites
} from '../../selectors/favorites';
import { getQuery } from '../../selectors/search';

jest.mock('../../selectors/search', () => ({
  getQuery: jest.fn()
}));

const favorites = {
  1: { id: 1, title: "foo" },
  2: { id: 2, title: "foobar" },
  3: { id: 3, title: "bar" }
};

const favoritesArray = [
  { id: 1, title: "foo" },
  { id: 2, title: "foobar" },
  { id: 3, title: "bar" }
];

const state = {
  favorites,

};

describe('favorite selectors', () => {
  describe('getFavorites', () => {
    it('should return favorites from state', () => {
      expect(getFavorites(state)).toEqual(favorites);
    });
  });

  describe('getFavorite', () => {
    it('should return a favorite by id from state', () => {
      expect(getFavorite(2, state)).toEqual(favorites[2]);
    });
  });

  describe('isFavorited', () => {
    it('should say if an specific gif is favorited by id', () => {
      expect(isFavorited(2, state)).toBeTruthy();
    });
  });

  describe('getFavoritesArray', () => {
    it('should return an array of the favorites gifs', () => {
      expect(getFavoritesArray(state)).toEqual(favoritesArray);
    });
  });

  describe('getFilteredFavorites', () => {
    it('should return a favorites array filteres by a query and anyFavorite flag set to true', () => {
      getQuery.mockImplementation(() => 'foo');
      const filteredArray = [
        { id: 1, title: "foo" },
        { id: 2, title: "foobar" }
      ];
      const expected = {
        favorites: filteredArray,
        anyFavorite: true
      };

      expect(getFilteredFavorites(state)).toEqual(expected);
    });

    it('should return an empty array of favorites if search does not match any item', () => {
      getQuery.mockImplementation(() => 'asdsds');
      const expected = {
        favorites: [],
        anyFavorite: true
      };

      expect(getFilteredFavorites(state)).toEqual(expected);
    });

    it('should return anyFavorite set to false if there is no favorites', () => {
      getQuery.mockImplementation(() => '');
      const expected = {
        favorites: [],
        anyFavorite: false
      };

      expect(getFilteredFavorites({ favorites: [] })).toEqual(expected);
    });
  });
});
