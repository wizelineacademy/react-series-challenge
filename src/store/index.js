import { createStore } from 'redux';
//import rootReducer from '../reducers';

const initialState = {favorites:[]};
/* 


const favorite = createStore(
  rootReducer,
  initialState,
);
*/

const reducer = (state, action ) => {
  if (action.type === "ADD_FAVORITE") {
    return {
      ...state,
      favorites: state.favorites.concat(action.favorite)
    }
  }
  
  return state;
}




export default createStore(reducer, initialState);

