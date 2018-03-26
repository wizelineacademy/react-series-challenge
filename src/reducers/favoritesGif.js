import actions from '../actions/favoritesGifs';
const initialState = {
  allGifs: {},
  filtered: {}
};

const favoritesGifReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.types.ADD_GIF:
      return {
        ...state,
        allGifs : {
          ...state.allGifs,
          [payload.id]: {...payload}
        }
      };
    case actions.types.REMOVE_GIF:
      const newState = {...state};
      delete newState.allGifs[payload];
      return newState;

    case actions.types.FILTER_GIFS:
      console.log('PAYLOAD: ', payload);
      return state;
    default:
      return state;
  }
};
export default favoritesGifReducer;