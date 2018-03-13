import favorites from '../actions/favorites';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case favorites.types.TOGGLE_FAVORITE: {
      const { payload: id } = action;
      if (!state.includes(id)) return [...state, action.payload];
      return state.filter(item => item !== id);
    }
    default: return state;
  }
};
