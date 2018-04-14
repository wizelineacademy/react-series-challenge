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
    case trendingGifs.types.GET_TRENDING_GIFS_REQUESTED: {
      const newState = {...state};
      const newPagination = { ...newState.pagination };
      const { total_count } = newPagination;
      const { pagination: actionPagination } = action.payload;

      newPagination.pages = total_count > 0 
        ? selectorTotalPages(newPagination)
        : newState.pagination.pages;

      const movePrevious = actionPagination && actionPagination.movePrevious;
      if (movePrevious) {
        actionPagination.offset = newState.pagination.offset - 1;
        actionPagination.offset = actionPagination.offset < 1 ? 1 : actionPagination.offset;
        delete(actionPagination.movePrevious);
      }

      const moveNext = actionPagination && actionPagination.moveNext;
      if (moveNext) {
        actionPagination.offset = newState.pagination.offset + 1;
        if (total_count > 0) {
          const lastPage = selectorTotalPages(newPagination);
          actionPagination.offset = actionPagination.offset > lastPage 
            ? lastPage 
            : actionPagination.offset;
        }
        delete(actionPagination.moveNext);
      }

      const moveLast = actionPagination && actionPagination.moveLast;
      if (moveLast && total_count > 0) {
        const lastPage = selectorTotalPages(newPagination);
        actionPagination.offset = lastPage;
        delete(actionPagination.moveLast);
      }

      newState.query = actionPagination && typeof(actionPagination.query) !== 'undefined'
        ? actionPagination.query 
        : newState.query;
      newState.pagination = {...newPagination, ...actionPagination};
      newState.fetching = true;
      return newState;
    }
    case trendingGifs.types.GET_TRENDING_GIFS_COMPLETED: {
      const newState = {...state};
      const { gifs: actionGifs } = action.payload;
      actionGifs.pagination.pages  = selectorTotalPages(actionGifs.pagination);

      return {
        ...newState,
        ...actionGifs,
        fetching: false,
      };
    }
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
      newState.selectedID = action.payload.gifID;
      return newState;
    }

    case trendingGifs.types.GET_GIF_COMPLETED: {
      const newState = {...state};
      const newSeletedGif = {...newState.selectedGif};
      newSeletedGif.fetching = false;
      newState.selectedGif = {...newSeletedGif, ...action.payload.gif};
      
      return newState;
    }
    case trendingGifs.types.GET_GIF_FAILED: {
      const newState = {...state};
      const newSeletedGif = {...newState.selectedGif};
      newSeletedGif.fetching = false;
      newSeletedGif.error = action.error;
      newState.selectedGif = newSeletedGif;

      return newState;
    }
    
    case trendingGifs.types.ADDED_TO_FAVORITES_GIF: {
      const newState = {...state};
      const {gifID} = action.payload;
      if (newState.selectedGif.id === gifID) {
        const newSeletedGif = {...newState.selectedGif};
        newSeletedGif.isFavorite = true;
        newState.selectedGif = newSeletedGif;
      }
      const currGif = newState.data.find(d => d.id === gifID);
      if (currGif) {
        currGif.isFavorite = true;
      }
      newState.data = [...newState.data];
      return newState;
    }

    case trendingGifs.types.REMOVED_TO_FAVORITES_GIF: {
      const {gifID} = action.payload;
      const newState = {...state};
      const currGif = newState.data.find(d => d.id === gifID);
      if (currGif) {
        currGif.isFavorite = false;
      }
      if (newState.selectedGif.id === gifID) {
        const newSeletedGif = {...newState.selectedGif};
        newSeletedGif.isFavorite = false;
        newState.selectedGif = newSeletedGif;
      }
      newState.data = [...newState.data];
      return newState;
    }
    
    default:
      return state;
  }
};

export default trendingGifsReducer;