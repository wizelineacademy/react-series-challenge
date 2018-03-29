// export const GET_CONTENT_REQUEST = 'GET_CONTENT_REQUEST';
// export const GET_CONTENT_COMPLETE = 'GET_CONTENT_COMPLETE';
// export const GET_CONTENT_ERROR = 'GET_CONTENT_ERROR';
// export const GET_NEXT_CONTENT_PAGE = 'GET_NEXT_CONTENT_PAGE';
// export const GET_PREV_CONTENT_PAGE = 'GET_PREV_CONTENT_PAGE';
// export const CONTENT_FAVORITE_BUTTON_CLICKED = 'CONTENT_FAVORITE_BUTTON_CLICKED';

// export const CHANGE_CONTENT_SEARCH = 'CHANGE_CONTENT_SEARCH';
// export const CHANGE_CONTENT_SEARCH_TYPE = 'CHANGE_CONTENT_SEARCH_TYPE';

// export const LOAD_FAVORITES = 'LOAD_FAVORITES'
// export const GET_FAVORITES_REQUEST = 'GET_FAVORITES_REQUEST';
// export const GET_FAVORITES_COMPLETE = 'GET_FAVORITES_COMPLETE';
// export const GET_FAVORITES_ERROR = 'GET_FAVORITES_ERROR';
// export const GET_NEXT_FAVORITES_PAGE = 'GET_NEXT_FAVORITES_PAGE';
// export const GET_PREV_FAVORITES_PAGE = 'GET_PREV_FAVORITES_PAGE';
// // export const SET_FAVORITES = 'SET_FAVORITES';

// export const CHANGE_FAVORITES_FILTER = 'CHANGE_FAVORITES_FILTER';
// export const FILTER_FAVORITES = 'FILTER_FAVORITES';
// export const ADD_REMOVE_FAVORITES = 'ADD_REMOVE_FAVORITES';

// export const GET_DETAILS_REQUEST = 'GET_DETAILS_REQUEST';
// export const GET_DETAILS_COMPLETE = 'GET_DETAILS_COMPLETE';
// export const GET_DETAILS_ERROR = 'GET_DETAILS_ERROR';
// export const ADD_REMOVE_FAVORITE_DETAILS = 'ADD_REMOVE_FAVORITE_DETAILS';

// BEGINS: Refactored Actions

// Changes Loading
export const SET_LOADING = 'SET_LOADING';

// Changes Filter/Search input
export const CHANGE_INPUT = 'CHANGE_INPUT';

// Triggers getting an especific page.
export const GO_TO_PAGE = 'GO_TO_PAGE';

// Sets the new state of the paginator.
export const SET_PAGINATOR = 'SET_PAGINATOR';

// Sets the content to be displayed.
export const SET_LIST = 'SET_LIST';

// Sets the favorites' state
export const SET_FAVORITES = 'SET_FAVORITES';

// Gets a page of the favorites
export const GET_FAVORITES = 'GET_FAVORITES';
export const LOAD_FAVORITESR = 'LOAD_FAVORITESR';

// Trigers the Add/Remove Favorite process.
export const ADD_REMOVE_FAVORITE = 'ADD_REMOVE_FAVORITE';
export const ADD_REMOVE_FAVORITE_HOME = 'ADD_REMOVE_FAVORITE_HOME';
export const ADD_REMOVE_FAVORITE_VIEW = 'ADD_REMOVE_FAVORITE_VIEW';
export const ADD_REMOVE_FAVORITE_DETAILS_R = 'ADD_REMOVE_FAVORITE_DETAILS_R';

// Asks for more content (Home View)
export const GET_NEW_CONTENT = 'GET_NEW_CONTENT';
export const UPDATE_CONTENT = 'UPDATE_CONTENT';

// Error Handling
export const ERROR_STATUS = 'ERROR_STATUS';

// Asks for the details of the image (Details View).
export const GET_DETAILS = 'GET_DETAILS';
export const SET_DETAILS = 'SET_DETAILS';

// Just in case.
export const FILTER_CHANGE = 'FILTER_CHANGE';
export const SEARCH_CHANGE = 'SEARCH_CHANGE';
export const FILTER_CLICK = 'FILTER_CLICK';
export const SEARCH_CLICK = 'SEARCH_CLICK';

export default {
  // GET_CONTENT_REQUEST,
  // GET_CONTENT_COMPLETE,
  // GET_CONTENT_ERROR,
  // GET_NEXT_CONTENT_PAGE,
  // GET_PREV_CONTENT_PAGE,
  // CHANGE_CONTENT_SEARCH,
  // CHANGE_CONTENT_SEARCH_TYPE,
  // CONTENT_FAVORITE_BUTTON_CLICKED,
  // GET_FAVORITES_REQUEST,
  // GET_FAVORITES_COMPLETE,
  // GET_FAVORITES_ERROR,
  // CHANGE_FAVORITES_FILTER,
  // ADD_REMOVE_FAVORITES,
  // GET_DETAILS_REQUEST,
  // GET_DETAILS_COMPLETE,
  // GET_DETAILS_ERROR,
  // ADD_REMOVE_FAVORITE_DETAILS,
  // LOAD_FAVORITES,
  // FILTER_FAVORITES,
  // CHANGE_LOADING,
  CHANGE_INPUT,
  GO_TO_PAGE,
  SET_PAGINATOR,
  SET_LIST,
  SET_FAVORITES,
  ADD_REMOVE_FAVORITE,
  GET_NEW_CONTENT,
  UPDATE_CONTENT,
  ERROR_STATUS,
  GET_DETAILS,
  FILTER_CHANGE,
  SEARCH_CHANGE,
  ADD_REMOVE_FAVORITE_HOME,
  ADD_REMOVE_FAVORITE_VIEW,
  LOAD_FAVORITESR,
  SET_DETAILS,
  FILTER_CLICK,
  SEARCH_CLICK
};
