import favorites from '../actions/favorites';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case favorites.types.TOGGLE_FAVORITE: {
      const { payload } = action;
      const newState = !state.find(item => item.id === payload.id)
        ? [...state, payload]
        : state.filter(item => item.id !== payload.id);
      localStorage.setItem('alphyFavs', JSON.stringify(newState));
      return newState;
    }
    case favorites.types.FETCH_FAVORITES: {
      return JSON.parse(localStorage.getItem('alphyFavs'));
    }
    default: {
      localStorage.setItem('alphyFavs', JSON.stringify(state));
      return state;
    }
  }
};
