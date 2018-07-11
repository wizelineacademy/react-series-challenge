import filterTrendingText from '../actions/filterText';

const {
  FILTER_TRENDING_TEXT_UPDATE,
} = filterTrendingText.types;

const initialState = {
  trendingFilter: '',
};

const filterTextReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_TRENDING_TEXT_UPDATE: {
      const { text } = payload;
      const newState = { ...state };
      newState.trendingFilter = text;
      return newState;
    }
    default:
      return state;
  }
};

export default filterTextReducer;
