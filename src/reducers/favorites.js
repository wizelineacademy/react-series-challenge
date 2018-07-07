import { handleActions } from 'redux-actions';
import { addToFavorites, removeFromFavorites } from '../actions/favorites';

const reducer = handleActions({
  [addToFavorites]: {
    next(){

    },
    throw(){

    }
  },
  [removeFromFavorites]: {
    next(state, action){

    },
    throw(state, actions){

    }
  }
}, {});

export default reducer;