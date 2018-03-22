import {
  SET_CURRENT_GIF,
  GET_GIF,
} from './actions';

const initialState = {
  currentGif: {},
  searched: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_GIF:
      return {
        ...state,
        currentGif: action.payload.element,
      };
    case GET_GIF.SUCCESS:
      return {
        ...state,
        currentGif: action.data.gif.data,
        searched: true,
        error: false,
      };
    case GET_GIF.ERROR:
      return {
        ...state,
        currentGif: {},
        searched: true,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
