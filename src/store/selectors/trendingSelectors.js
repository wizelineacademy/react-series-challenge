export const initialState = [];

export const getTrendingData = (state = initialState) =>
  state.ACTION_TRENDING_GET_DATA_RESPONSE !== undefined &&
  state.ACTION_TRENDING_GET_DATA_RESPONSE.payload !== undefined &&
  state.ACTION_TRENDING_GET_DATA_RESPONSE.payload.data !== undefined
    ? state.ACTION_TRENDING_GET_DATA_RESPONSE.payload.data
    : initialState;
