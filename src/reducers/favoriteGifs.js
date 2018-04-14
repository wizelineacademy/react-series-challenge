import favoriteGifs from '../actions/favoriteGifs';

const initialState = {
  fetching: false,
  selected2Add: {},
  selectedID2remove: '',
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

const favoriteGifsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case favoriteGifs.types.GET_FAVORITE_GIFS_REQUESTED: {
      //console.log(JSON.stringify(action, null, 2), 'GET_FAVORITE_GIFS_REQUESTED');
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
      // console.log(JSON.stringify(newState, null, 2), 'GET_FAVORITE_GIFS_REQUESTED');
      return newState;
    }
    case favoriteGifs.types.GET_FAVORITE_GIFS_COMPLETED: {
      //console.log(JSON.stringify(action, null, 2), 'GET_FAVORITE_GIFS_COMPLETED');
      const { gifs: actionGifs } = action.payload;
      actionGifs.pagination.pages  = selectorTotalPages(actionGifs.pagination);
      const newState = {
        ...state,
        fetching: false,
        ...actionGifs,
      };

      //console.log(JSON.stringify(newState, null, 2), 'GET_FAVORITE_GIFS_COMPLETED');
      return newState;
    }
    case favoriteGifs.types.GET_FAVORITE_GIFS_FAILED: {
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    }

    case favoriteGifs.types.ADD_FAVORITE_GIF_REQUESTED: {
      const { gif: actionGif } = action.payload;
      const newState = {...state};
      const newSelected2Add = { ...newState.selected2Add };
      newSelected2Add.saving = true;

      newState.selected2Add = {...newSelected2Add, ...actionGif};
      return newState;
    }
    case favoriteGifs.types.ADD_FAVORITE_GIF_COMPLETED: {
      const { gif: actionGif } = action.payload;
      const newState = {...state};
      const newSelected2Add = { ...newState.selected2Add };
      newSelected2Add.saving = false;
      newState.selected2Add = newSelected2Add;
      newState.data = newState.data.filter(d => d.id !== actionGif.id);
      newState.data = [actionGif, ...newState.data];
      return newState;
    }
    case favoriteGifs.types.ADD_FAVORITE_GIF_FAILED: {
      const newState = {...state};
      const newSelected2Add = { ...newState.selected2Add };
      newSelected2Add.saving = false;
      newSelected2Add.error = action.error;
      newState.selected2Add = newSelected2Add;

      return newState;
    }

    case favoriteGifs.types.REMOVE_FAVORITE_GIF_REQUESTED: {
      const newState = {...state};
      const {gifID} = action.payload;
      newState.selectedID2remove = gifID;

      return newState;
    }
    case favoriteGifs.types.REMOVE_FAVORITE_GIF_COMPLETED: {
      const newState = {...state};
      const {gifID} = action.payload;
      newState.data = newState.data.filter(d => d.id !== gifID);
      return newState;
    }
    case favoriteGifs.types.REMOVE_FAVORITE_GIF_FAILED: {
      const newState = {...state};
      newState.error = action.error;

      return newState;
    }
    default:
      return state;
  }
};

export default favoriteGifsReducer;