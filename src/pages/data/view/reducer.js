import {
  SET_CURRENT_GIF,
} from './actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_GIF:
      return {
        ...state,
        searching: true,
      };
    default:
      return state;
  }
};

export default reducer;
