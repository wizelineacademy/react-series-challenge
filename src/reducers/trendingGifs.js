import trendingGifs from '../actions/trendingGifs';

const initialState = {
  fetching: false,
  currentPage: 1,
  data: [],
  pagination: {
    offset: 0
  }
};

const trendingGifsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case trendingGifs.types.GET_TRENDING_GIFS_REQUESTED:
      const newState = {...state};
      const newPagination = { ...newState.pagination };
      const moveNext = action.payload && action.payload.moveNext;
      if (moveNext) {
        action.payload.offset = newState.pagination.offset + 1;
        // TODO Reset to zero when is last page
        delete(action.payload.moveNext);
      }
      const movePrevious = action.payload && action.payload.movePrevious;
      if (movePrevious) {
        action.payload.offset = newState.pagination.offset + -1;
        action.payload.offset = action.payload.offset < 0 ? 0 : action.payload.offset;
        delete(action.payload.movePrevious);
      }
      newState.pagination = {...newPagination, ...action.payload};
      return {
        ...newState,
        fetching: true
      };
    case trendingGifs.types.GET_TRENDING_GIFS_COMPLETED:
      return {
        ...state,
        fetching: false,
        ...action.payload,
      };
    case trendingGifs.types.GET_TRENDING_GIFS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default trendingGifsReducer;