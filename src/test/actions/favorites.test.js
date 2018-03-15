import {
  addFavorite,
  ADD_FAVORITE,
  removeFavorite,
  REMOVE_FAVORITE,
  toggleFavorite,
  TOGGLE_FAVORITE
} from '../../actions/favorites';

describe('favorites action creators', () => {
  describe('addFavorite', () => {
    it(`should return action with type ${ADD_FAVORITE}`, () => {
      const expected = { type: ADD_FAVORITE };
      expect(addFavorite()).toEqual(expected);
    });

    it(`should return action with gif object as a payload`, () => {
      const gif = { id: 1, image: 'foo' };
      const expected = {
        type: ADD_FAVORITE,
        payload: gif
      };

      expect(addFavorite(gif)).toEqual(expected);
    });
  });

  describe('removeFavorite', () => {
    it(`should return action with type ${REMOVE_FAVORITE}`, () => {
      const expected = { type: REMOVE_FAVORITE };
      expect(removeFavorite()).toEqual(expected);
    });

    it(`should return action with gif object as a payload`, () => {
      const gif = { id: 1, image: 'foo' };
      const expected = {
        type: REMOVE_FAVORITE,
        payload: gif
      };

      expect(removeFavorite(gif)).toEqual(expected);
    });
  });

  describe('toggleFavorite', () => {
    it(`should return action with type ${TOGGLE_FAVORITE}`, () => {
      const expected = { type: TOGGLE_FAVORITE };
      expect(toggleFavorite()).toEqual(expected);
    });

    it(`should return action with gif object as a payload`, () => {
      const gif = { id: 1, image: 'foo' };
      const expected = {
        type: TOGGLE_FAVORITE,
        payload: gif
      };

      expect(toggleFavorite(gif)).toEqual(expected);
    });
  });
});
