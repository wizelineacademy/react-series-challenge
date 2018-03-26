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
      const currentGifs =
        Object
          .keys(state.allGifs)
          .map(key => state.allGifs[key])
          .filter(gif => gif.title.includes(payload));
      const result = {};
      currentGifs.forEach(gif => {
        result[gif.id] = gif;
      });
      return {
        ...state,
        filtered: result
      };
    case actions.types.FILTER_GIFS_CLEAR:
      return {
        ...state,
        filtered: {}
      };
    default:
      return state;
  }
};
export default favoritesGifReducer;