import selectors from '../index';

const state = {
  home: {
    gifs: [{ id: 'id.1' }, { id: 'id.2' }],
    isLoading: false,
  },
  favorites: {
    favoritesIds: ['id.2', 'id.3'],
    filteredGifs: [{ id: 'id.2' }],
    gifs: [{ id: 'id.2' }, { id: 'id.3' }],
  },
  gifModal: {
    isOpen: false,
    gif: { id: 'id.2' },
  },
  location: {
    path: '/favorites',
  },
};

describe('Global selectors', () => {
  describe('homeSelector', () => {
    it('should return gifs and isLoading values from state.home', () => {
      expect(selectors.homeSelector(state)).toMatchSnapshot();
    });
  });

  describe('favoritesIdsSelector', () => {
    it('should return favoritesIds from state.favorites', () => {
      expect(selectors.favoritesIdsSelector(state)).toMatchSnapshot();
    });
  });

  describe('favoritesSelector', () => {
    it('should return filteredGifs from state.favorites.gifs key', () => {
      expect(selectors.favoritesSelector(state)).toMatchSnapshot();
    });
  });

  describe('gifModalSelector', () => {
    it('should return isOpen, gif from state.gifModal and isFavorite set to true if gif is in favoritesIds', () => {
      expect(selectors.gifModalSelector(state)).toMatchSnapshot();
    });

    it('should return isOpen, gif from state.gifModal and isFavorite set to false if gif is not in favoritesIds', () => {
      const altState = {
        ...state,
        favorites: {
          ...state.favorites,
          favoritesIds: ['id.1', 'id.2'],
        },
        gifModal: {
          ...state.gifModal,
          gif: { id: 'id.999' },
        },
      };
      expect(selectors.gifModalSelector(altState)).toMatchSnapshot();
    });

    it('should return isOpen, gif from state.gifModal and isFavorite set to false if gif is not set ', () => {
      const altState = {
        ...state,
        favorites: {
          ...state.favorites,
          favoritesIds: ['id.1', 'id.2'],
        },
        gifModal: {
          ...state.gifModal,
          gif: null,
        },
      };
      expect(selectors.gifModalSelector(altState)).toMatchSnapshot();
    });
  });

  describe('locationSelector', () => {
    it('should return an object with the path stored in state.location', () => {
      expect(selectors.locationSelector(state)).toMatchSnapshot();
    });
  });
});
