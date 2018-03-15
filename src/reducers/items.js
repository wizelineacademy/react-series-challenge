import { GET_ITEMS_SUCCESS, GET_ITEMS_ERROR } from '../actions/types';

const initialState = {};

const items = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEMS_SUCCESS:
      return { ...state, list: payload.items };
    case GET_ITEMS_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}

export default items;
