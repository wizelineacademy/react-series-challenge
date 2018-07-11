import favoriteActions from "../actions/favorites";

const initialState = {
  items: {},
  filtered: null
};

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state.items };

  switch (type) {
    case favoriteActions.types.FAVORITE_TOGGLE:
      const { item } = payload;

      if (item.id in newState) {
        delete newState[item.id];
      } else {
        newState[item.id] = { ...item };
      }

      return { ...state, items: newState };
    case favoriteActions.types.FAVORITE_FILTER:
      const filterdKeys = Object.keys(newState).filter(key => {
        const query = new RegExp(action.payload, "i");
        return query.test(newState[key].title);
      });
      const filteredItems = filterdKeys.map(key => newState[key]);

      return { ...state, filtered: action.payload ? filteredItems : null };
    default:
      return state;
  }
};

export default favoritesReducer;
