import favActions from '../actions/favorites';
const initialState = {
  searchTerm: '',
  filtered: [],
  favorites: []
};

const trendingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favActions.types.FAVORITES_UPDATE:{
      return {
        ...state,
        favorites: payload
      }
    }


    default:
      return state;
  }
};

export default trendingReducer;