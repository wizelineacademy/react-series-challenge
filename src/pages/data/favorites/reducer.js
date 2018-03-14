import {
  TOGGLE_FAVORITE,
} from './actions';

const initialState = {
  list: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const element = action.payload.element;
      const newFavorites = state.list;
      if(newFavorites[element.id]){
        delete newFavorites[element.id];
      } else {
        newFavorites[element.id]={...element};
      }
      return {
        ...state,
        list: newFavorites,
      };
    default:
      return state;
  }
};

export default reducer;
