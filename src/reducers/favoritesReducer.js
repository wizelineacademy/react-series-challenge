import favoriteActions from '../actions/favoriteActions';

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favoriteActions.types.TOGGLE_FAVORITE:
      const index = state.indexOf(payload);

      if(index === -1) {
        return [
          ...state,
          payload
        ]
      } else {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }

    default:
      return state;
  }
};

export default favoritesReducer;
