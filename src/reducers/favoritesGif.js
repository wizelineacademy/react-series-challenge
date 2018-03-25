import actions from '../actions/favoritesGifs';
const initialState = {};

const favoritesGifReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.types.ADD_GIF:
      return {
        ...state,
        [payload.id]: {...payload}
      };
    case actions.types.REMOVE_GIF:
      const newState = {...state};
      delete newState[payload.id];
      return newState;
    default:
      return state;
  }
};
export default favoritesGifReducer;