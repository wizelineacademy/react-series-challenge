import gifsActions from '../actions/gifs';

const initialState = {
  favorites: {},
  gifs: {},
  loading: false
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
    default:
      return state;
  }
};

export default gifsReducer;
