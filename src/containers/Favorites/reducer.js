import actions from './actions';
const { FAVORITE_ID_ADD, FAVORITE_ID_REMOVE, FAVORITES_SET } = actions.types;

const initialState = {
  favoritesIds: [],
  gifs: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FAVORITE_ID_ADD:
      return { ...state, favoritesIds: [...state.favoritesIds, payload.id] };
    case FAVORITE_ID_REMOVE:
      const favoritesIds = state.favoritesIds.filter(id => {
        return id !== payload.id;
      });
      return { ...state, favoritesIds: favoritesIds };
    case FAVORITES_SET:
      return { ...state, gifs: payload };
    default:
      return state;
  }
};

export default reducer;
