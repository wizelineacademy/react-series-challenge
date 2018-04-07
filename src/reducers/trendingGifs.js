import trendingGifs from '../actions/trendingGifs';

const initialState = {
  fetching: false,
  selectedID: '',
  selectedGif: { 
    fetching: false,
    id: '',
    title: '',
    images: { original: { url: '' } }
  },
  data: [],
  pagination: {
    offset: 1,
    total_count: 0,
    count: 0,
    pages: 0
  },
  query: '',
  error: ''
};

const selectorTotalPages = ({total_count, count}) => 
  total_count > 0 ? Math.ceil(total_count / count) : 0;

const trendingGifsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case trendingGifs.types.GET_TRENDING_GIFS_REQUESTED:
      const newState = {...state};
      const newPagination = { ...newState.pagination };
      const { total_count } = newPagination;

      newPagination.pages = total_count > 0 
        ? selectorTotalPages(newPagination)
        : newState.pagination.pages;

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
          const lastPage = selectorTotalPages(newPagination);
          action.payload.offset = action.payload.offset > lastPage 
            ? lastPage 
            : action.payload.offset;
        }
        delete(action.payload.moveNext);
      }

      const moveLast = action.payload && action.payload.moveLast;
      if (moveLast && total_count > 0) {
        const lastPage = selectorTotalPages(newPagination);
        action.payload.offset = lastPage;
        delete(action.payload.moveLast);
      }

      newState.query = action.payload && typeof(action.payload.query) !== 'undefined'
        ? action.payload.query 
        : newState.query;
      newState.pagination = {...newPagination, ...action.payload};
      return {
        ...newState,
        fetching: true
      };
    case trendingGifs.types.GET_TRENDING_GIFS_COMPLETED:
      action.payload.pagination.pages  = selectorTotalPages(action.payload.pagination);
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
    
    case trendingGifs.types.GET_GIF_REQUESTED: {
      const newState = {...state};
      const newSeletedGif = {...newState.selectedGif};
      newSeletedGif.fetching = true;
      delete(newSeletedGif.isFavorite);
      newState.selectedGif = newSeletedGif;
      newState.selectedID = action.payload;
      return {
        ...newState
      };
    }

    case trendingGifs.types.GET_GIF_COMPLETED: {
      const newState = {...state};
      const newSeletedGif = {...newState.selectedGif};
      newSeletedGif.fetching = false;
      newState.selectedGif = {...newSeletedGif, ...action.payload};
      
      return {
        ...newState
      };
    }
    case trendingGifs.types.GET_GIF_FAILED: {
      const newState = {...state};
      const newSeletedGif = {...newState.selectedGif};
      newSeletedGif.fetching = false;
      newSeletedGif.error = action.error;
      newState.selectedGif = newSeletedGif;

      return {
        ...newState
      };
    }
    
    case trendingGifs.types.ADDED_TO_FAVORITES_GIF: {
      const newState = {...state};
      if (newState.selectedGif.id === action.payload) {
        const newSeletedGif = {...newState.selectedGif};
        newSeletedGif.isFavorite = true;
        newState.selectedGif = newSeletedGif;
      }
      const currGif = newState.data.find(d => d.id === action.payload);
      if (currGif) {
        currGif.isFavorite = true;
      }
      newState.data = [...newState.data];
      return {
        ...newState
      };
    }

    case trendingGifs.types.REMOVED_TO_FAVORITES_GIF: {
      const newState = {...state};
      const currGif = newState.data.find(d => d.id === action.payload);
      if (currGif) {
        currGif.isFavorite = false;
      }
      if (newState.selectedGif.id === action.payload) {
        const newSeletedGif = {...newState.selectedGif};
        newSeletedGif.isFavorite = false;
        newState.selectedGif = newSeletedGif;
      }
      newState.data = [...newState.data];
      return {
        ...newState
      };
    }
    
    default:
      return state;
  }
};

export default trendingGifsReducer;