import actions from "./HomeActions";

const initialState = {
  fetching: false,
  gifs: []
};

const homeReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actions.types.GET_TRENDING_REQUESTED:
      return {
        ...state,
        fetching: true,
      };

    case actions.types.GET_TRENDING_COMPLETED:
      return {
        ...state,
        fetching: false,
        gifs: action.payload.data
      };

    case actions.types.GET_TRENDING_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default homeReducer;
