export const ACTION_TRENDING_GET_DATA_REQUEST =
  "ACTION_TRENDING_GET_DATA_REQUEST";

export const ACTION_TRENDING_GET_DATA_RESPONSE =
  "ACTION_TRENDING_GET_DATA_RESPONSE";

export const actionTrendingGetDataRequest = data => ({
  type: ACTION_TRENDING_GET_DATA_REQUEST,
  payload: data
});

export const actionTrendingGetDataResponse = data => ({
  type: ACTION_TRENDING_GET_DATA_RESPONSE,
  payload: data
});
