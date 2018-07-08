import favoriteActions from "../actions/favorites";

const initialState = {
  items: {},
  filtered: null
};

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favoriteActions.types.FAVORITE_TOGGLE:
      const { item } = payload;

      const newState = { ...state.items };
      if (item.id in newState) {
        delete newState[item.id];
      } else {
        newState[item.id] = { ...item };
      }

      return { ...state, items: newState };
    case favoriteActions.types.FAVORITE_FILTER:
      const favoriteGifs = { ...state.items };
      const filterdKeys = Object.keys(favoriteGifs).filter(key => {
        const query = new RegExp(action.payload, "i");
        return query.test(favoriteGifs[key].title);
      });
      const filteredItems = filterdKeys.map(key => favoriteGifs[key]);

      return { ...state, filtered: action.payload ? filteredItems : null };
    default:
      return state;
  }
};

export default favoritesReducer;
