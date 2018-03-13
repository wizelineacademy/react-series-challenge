const initialState = [];

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const favoriteAction = payload => ({ type: TOGGLE_FAVORITE, payload });

export const toggleFavorite = id => (dispatch) => {
  dispatch(favoriteAction(id));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const { payload: id } = action;
      if (state.indexOf(id) === -1) return [...state, action.payload];
      return state.filter(item => item !== id);
    }
    default: return state;
  }
};
