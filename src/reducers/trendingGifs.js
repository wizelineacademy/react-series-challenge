import trendingGifs from '../actions/trendingGifs';

const initialState = {
  fetching: false,
  currentPage: 1,
  data: [],
  pagination: {
    offset: 1,
    total_count: 0,
    count: 0
  },
  error: ''
};

const trendingGifsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case trendingGifs.types.GET_TRENDING_GIFS_REQUESTED:
      const newState = {...state};
      const newPagination = { ...newState.pagination };
      const { count, total_count } = newPagination;

      const movePrevious = action.payload && action.payload.movePrevious;
      if (movePrevious) {
        action.payload.offset = newState.pagination.offset - 1;
        action.payload.offset = action.payload.offset < 1 ? 1 : action.payload.offset;
        delete(action.payload.movePrevious);
      }

      const moveNext = action.payload && action.payload.moveNext;
      if (moveNext) {
        action.payload.offset = newState.pagination.offset + 1;
        if (total_count > 0) {
          const lastPage = Math.ceil(total_count / count);
          action.payload.offset = action.payload.offset > lastPage 
            ? lastPage 
            : action.payload.offset;
        }
        // TODO Reset to zero when is last page
        delete(action.payload.moveNext);
      }

      const moveLast = action.payload && action.payload.moveLast;
      if (moveLast && total_count > 0) {
        const lastPage = Math.ceil(total_count / count);
        action.payload.offset = lastPage;
        delete(action.payload.moveLast);
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