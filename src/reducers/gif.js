import gif from '../actions/gif';

const initialState = {
  data: undefined,
  error: undefined,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case gif.types.LOADING_GIF: return { ...state, loading: true };
    case gif.types.GET_GIF: return { data: action.payload, error: undefined, loading: false };
    case gif.types.SET_GIF_ERROR: return { data: undefined, error: action.payload, loading: false };
    default: return state;
  }
};
