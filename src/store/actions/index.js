export const ACTION_TRENDING_GET_DATA_REQUEST =
  "ACTION_TRENDING_GET_DATA_REQUEST";

export const ACTION_TRENDING_GET_DATA_RESPONSE =
  "ACTION_TRENDING_GET_DATA_RESPONSE";

export const ACTION_SET_TO_FAV = "ACTION_SET_TO_FAV";

export const ACTION_FAV_DELETE = "ACTION_FAV_DELETE";

export const FAVORITES = "FAVORITES";

export const ACTION_SEARCH_TERM_GET_DATA_REQUEST =
  "ACTION_SEARCH_TERM_GET_DATA_REQUEST";

export const ACTION_SEARCH_TERM_GET_DATA_RESPONSE =
  "ACTION_SEARCH_TERM_GET_DATA_RESPONSE";

export const actionTrendingGetDataRequest = data => ({
  type: ACTION_TRENDING_GET_DATA_REQUEST,
  payload: data
});

export const actionTrendingGetDataResponse = data => ({
  type: ACTION_TRENDING_GET_DATA_RESPONSE,
  payload: data
});

export const actionSetToFav = data => ({
  type: ACTION_SET_TO_FAV,
  payload: data
});

export const actionFavDelete = data => ({
  type: ACTION_FAV_DELETE,
  payload: data
});

export const actionSearchTermGetDataRequest = data => ({
  type: ACTION_SEARCH_TERM_GET_DATA_REQUEST,
  payload: data
});

export const actionSearchTermGetDataResponse = data => ({
  type: ACTION_SEARCH_TERM_GET_DATA_RESPONSE,
  payload: data
});
