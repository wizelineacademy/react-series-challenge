import actions from './actions';

const { GIFS_SET, LOADING_SET } = actions.types;
const initialState = {
  isLoading: false,
  gifs: [],
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING_SET:
      return { ...state, loading: payload };
    case GIFS_SET:
      return { ...state, gifs: payload };

    default:
      return state;
  }
};

export default reducer;
