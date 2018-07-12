import { SET_FAVORITES } from '../actions/types';

const initialState = {
  favorites: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_FAVORITES:
      const favorites = [...payload];
      return { favorites };
    default:
      return state;
  }
}
