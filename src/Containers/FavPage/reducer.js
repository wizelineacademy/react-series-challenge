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
      var indexDelete;
      var arrayFav=state.favGifs;
      arrayFav.map((fav,index)=>{
        if(fav===action.id){
          indexDelete=index;
        }
      });
      arrayFav.splice(indexDelete,1);
      return {...state,favGifs:arrayFav}
    default:
      return state;
  }
}

export default favReducer;