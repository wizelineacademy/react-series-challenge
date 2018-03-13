import trending from '../actions/trending';

const initialState = {
  data: undefined,
  error: undefined,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case trending.types.LOADING_TRENDING: return { ...state, loading: true };
    case trending.types.GET_TRENDING: return { data: action.payload, error: undefined, loading: false };
    case trending.types.SET_TRENDING_ERROR: return { data: undefined, error: action.payload, loading: false };
    default: return state;
  }
};
