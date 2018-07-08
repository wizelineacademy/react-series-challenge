import { SET_ITEMSLIST } from '../actions/types';

const initialState = {
  currentItemsList: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ITEMSLIST:
      const currentItemsList = [...payload];
      return { currentItemsList };
    default:
      return state;
  }
}
