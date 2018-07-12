import actions from './actions';

const { PATH_SET } = actions.types;
const initialState = {
  path: '',
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PATH_SET:
      return { ...state, path: payload };
    default:
      return state;
  }
};

export default reducer;
