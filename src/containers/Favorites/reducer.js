import actions from './actions';
const { FAVORITE_ADD, FAVORITE_REMOVE } = actions.types;

const initialState = {
  favoritesIds: [],
  gifs: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FAVORITE_ADD:
      return { ...state, favoritesIds: [...state.favoritesIds, payload.id] };
    case FAVORITE_REMOVE:
      const favoritesIds = state.favoritesIds.filter(id => {
        return id !== payload.id;
      });
      return { ...state, favoritesIds: favoritesIds };
    default:
      return state;
  }
};

export default reducer;
