import {
  TOGGLE_GIF_FAVORITE,
} from './actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_GIF_FAVORITE:
      return {
        ...state,
        searching: true,
      };
    default:
      return state;
  }
};

export default reducer;
