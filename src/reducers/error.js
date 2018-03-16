import { SET_ERROR } from '../actions/types';

const initialState = { };

const setError = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SET_ERROR:
      return { hasError: true };

    default:
      return state;
  }
}

export default setError;
