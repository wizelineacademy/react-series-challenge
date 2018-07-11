import {
  ADD_FAV,
  WITHDRAW_FAV
} from './action';

const initialState = {
  favGifs: [],
  favLoading: true
};

function favReducer(state = initialState, action) {
  
  switch (action.type) {
    case ADD_FAV:
      return {...state, favGifs: [...state.favGifs, action.params]}
    case WITHDRAW_FAV:
    const favGifs = state.favGifs.filter(fav => fav.id !== action.id);
      return {...state,favGifs}
    default:
      return state;
  }
}

export default favReducer;