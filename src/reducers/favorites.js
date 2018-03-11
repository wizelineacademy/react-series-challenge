import favoriteActions from '../actions/favorites';

const initialState = [];

const favoriteGifs = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case favoriteActions.types.SET_FAVORITE: {
      const newState =  state.filter(gif => gif.id !== payload.id)
      if(newState.length !== state.length) {
        return newState
      } else {
        return [...state, payload]
      }
    }
    default:
      return state;
  }
};

export default favoriteGifs;
