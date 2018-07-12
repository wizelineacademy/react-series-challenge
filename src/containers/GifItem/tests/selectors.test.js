import selectors from '../selectors';

describe('GifItem selectors', () => {
  describe('propsSelector', () => {
    it('should return an object with isFavorite prop set to true, depending on the state favorites Ids list', () => {
      const state = {
        favorites: {
          favoritesIds: ['id.9'],
        },
      };
      const props = { id: 'id.9' };
      expect(selectors.propsSelector(state, props)).toEqual({
        isFavorite: true,
      });
    });

    it('should return an object with isFavorite prop set to false, depending on the state favorites Ids list', () => {
      const state = {
        favorites: {
          favoritesIds: ['id.9'],
        },
      };
      const props = { id: 'id.2' };
      expect(selectors.propsSelector(state, props)).toEqual({
        isFavorite: false,
      });
    });
  });
});
