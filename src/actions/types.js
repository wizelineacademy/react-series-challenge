// BEGINS: Refactored Actions

// Changes Loading
export const SET_LOADING = 'SET_LOADING';

// Changes Filter/Search input
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';

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
  
  CHANGE_INPUT,
  CLEAR_INPUT,
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
