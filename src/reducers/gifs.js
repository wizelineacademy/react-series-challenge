import gifsActions from '../actions/gifs';

const initialState = {
  favorites: {},
  gifs: {},
  favoritesResults: {},
  searchResults: {},
  loading: false,
  searchQuery: false
};

const { types } = gifsActions;

const gifsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOAD_DATA_START: {
      return { ...state, loading: true };
    }
    case types.LOAD_DATA_FINISHED: {
      const {
        gifs: {
          data: { data: gifs }
        }
      } = payload;

      const mappedGifs = gifs.reduce((acc, gif) => {
        acc[gif.id] = gif;
        return acc;
      }, {});

      return { ...state, gifs: mappedGifs, loading: true };
    }
    case types.LOAD_DATA_FAILED: {
      return { ...state, loading: true };
    }
    case types.LOAD_FAVORITES_FINISHED: {
      const { favorites } = payload;
      return { ...state, favorites };
    }
    case types.TOGGLE_FAVORITE: {
      const { gif, isFavorite } = payload;

      if (!isFavorite) {
        const { favorites } = state;
        const newFavorites = { ...favorites, [gif.id]: gif };

        return { ...state, favorites: newFavorites };
      }

      const { [gif.id]: _deletedFavorite, ...favorites } = state.favorites;

      return { ...state, favorites };
    }
    case types.SEARCH_FAVORITES: {
      const query = payload.query.toLowerCase();
      const { favorites } = state;

      if (query) {
        const favoritesResults = Object.keys(favorites).reduce((acc, id) => {
          const gif = favorites[id];

          if (gif.title.toLowerCase().includes(query)) {
            acc[gif.id] = gif;
          }
          return acc;
        }, {});

        return { ...state, searchQuery: true, favoritesResults };
      }

      return { ...state, searchQuery: false, favoritesResults: {} };
    }
    case types.SEARCH_FINISHED: {
      const {
        gifs: {
          data: { data: gifs }
        }
      } = payload;

      const mappedGifs = gifs.reduce((acc, gif) => {
        acc[gif.id] = gif;
        return acc;
      }, {});

      return { ...state, searchQuery: true, searchResults: mappedGifs };
    }
    case types.DONT_SEARCH: {
      return { ...state, searchQuery: false };
    }
    case types.CLEAR_QUERY: {
      return { ...state, searchQuery: false };
    }
    default:
      return state;
  }
};

export default gifsReducer;
