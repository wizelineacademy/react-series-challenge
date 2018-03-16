import { GET_ITEMS_SUCCESS, GET_ITEMS_ERROR } from '../actions/types';

const initialState = { list: {} };

const items = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEMS_SUCCESS:
      const list = payload.items.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
      }, {});

      return { ...state, list, error: false };

    case GET_ITEMS_ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default items;
