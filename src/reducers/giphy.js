  import giphyActions from '../actions/giphy';

const initialState = {
  data: [],
  searchTerm: '',
  pagination: {},
  filteredFavorites: [],
};

const giphyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case giphyActions.types.GET_FAVORITE_GIFS_COMPLETED: {
      const { data } = payload;
      const newState = { 
        ...state,
        data,
        pagination: {},
        filteredFavorites: [],
      };

      return newState;
    }
    case giphyActions.types.FILTER_FAVORITES: {
      const { data } = state;
      const { searchTerm } = payload;
      const filteredFavorites = data.filter(gif => gif.title.includes(searchTerm))
      const newState = { 
        ...state,
        filteredFavorites,
        pagination: {},
      };

      return newState;
    }
    case giphyActions.types.GET_GIF_COMPLETED: {
      const { data, pagination } = payload;

      const newState = { 
        ...state,
        data: [ data ],
        pagination,
        filteredFavorites: [],
      };

      return newState;
    }
    case giphyActions.types.SEARCH_GIFS_REQUESTED: {
      const newState = {
        ...state,
        searchTerm: payload.searchTerm,
        filteredFavorites: [],
      }

      return newState;
    }
    case giphyActions.types.GET_TRENDING_GIFS_COMPLETED: {
      const { data, pagination } = payload;

      const newState = { 
        searchTerm: state.searchTerm,
        data,
        pagination,
        filteredFavorites: [],
      };

      return newState;
    }
    case giphyActions.types.SEARCH_GIFS_COMPLETED: {
      const { data, pagination } = payload;

      const newState = { 
        ...state,
        data,
        pagination,
        filteredFavorites: [],
      };

      return newState;
    }

    default:
      return state;
  }
};

export default giphyReducer;
