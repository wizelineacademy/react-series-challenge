import actions from './actions';
const {
  FAVORITE_ID_ADD,
  FAVORITE_ID_REMOVE,
  FAVORITES_SET,
  FAVORITES_SEARCH,
} = actions.types;

const initialState = {
  favoritesIds: [],
  gifs: [],
  filteredGifs: [],
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
      const gifs = state.gifs.filter(gif => {
        return gif.id !== payload.id;
      });
      const filteredGifs = state.filteredGifs.filter(gif => {
        return gif.id !== payload.id;
      });

      return {
        ...state,
        favoritesIds: favoritesIds,
        gifs: gifs,
        filteredGifs: filteredGifs,
      };
    case FAVORITES_SET:
      return { ...state, gifs: payload, filteredGifs: payload };
    case FAVORITES_SEARCH:
      let filtered = state.gifs;
      if (payload.term) {
        filtered = state.gifs.filter(gif => {
          return gif.title.indexOf(payload.term) > -1;
        });
      }
      return { ...state, filteredGifs: filtered };
    default:
      return state;
  }
};

export default reducer;
