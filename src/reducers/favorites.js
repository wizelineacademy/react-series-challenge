const initialState = { data: [] };

const ADD_FAVORITE = 'ADD_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';

const addFavoriteAction = payload => ({ type: ADD_FAVORITE, payload });
const deleteFavoriteAction = payload => ({ type: DELETE_FAVORITE, payload });

export const addFavorite = id => (dispatch) => {
  dispatch(addFavoriteAction(id));
};

export const removeFavorite = id => (dispatch) => {
  dispatch(deleteFavoriteAction(id));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: return [...initialState, ...action.payload];
    case DELETE_FAVORITE: return state.filter(item => item !== action.payload);
    default: return state;
  }
};
