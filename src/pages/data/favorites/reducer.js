import {
  TOGGLE_FAVORITE,
  FILTER_FAVORITE,
} from './actions';

const initialState = {
  list: {},
  filteredElements: [],
  filtered: false,
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
    case FILTER_FAVORITE: {
      const text = action.payload.text;
      const myRe = new RegExp(text, 'g');
      const newList = Object.values(state.list).filter(value => {
        return value.title.match(myRe);
      })
      return {
        ...state,
        filteredElements: newList,
        filtered: text !== '',
      };
    }
    default:
      return state;
  }
};

export default reducer;
