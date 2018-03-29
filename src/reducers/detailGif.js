import actions from '../actions/detailGif';
const initialState = {
  gifId: null,
  gif: {},
  isLoading: false,
  error: null,
};

const detailGifReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case actions.types.GET_SINGLE_GIF_REQUESTED:
      return {
        ...state,
        gifId: payload,
        isLoading: true,
      };

    case actions.types.GET_SINGLE_GIF_COMPLETED:
      return {
        ...state,
        isLoading: false,
        gif: {...payload},
        gifId: null
      };

    case actions.types.GET_SINGLE_GIF_FAILED:
      return {
        ...state,
        isLoading: false,
        error: {...payload}
      };

    default:
      return state;
  }
};

export default detailGifReducer;