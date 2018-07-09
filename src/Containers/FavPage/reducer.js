import {
  QUERY_FAV,
  QUERY_FAV_ERROR,
  QUERY_FAV_SUCCESS,
  ADD_FAV,
  WITHDRAW_FAV
} from './action';

const initialState = {
  favGifs: [],
  favLoading: true
};

function favReducer(state = initialState, action) {
  
  switch (action.type) {
    case QUERY_FAV:
      return {...state,favLoading:true}
    case QUERY_FAV_SUCCESS:
      const { pagination, data } = action.data;
      const total = pagination ? pagination.total_count : 0;
        return {...state,favLoading:false,favTotal:total,favGifs:data};
    case QUERY_FAV_ERROR:
      return {...state,favGifs:null, favLoading:false}
    case ADD_FAV:
      return {...state, favGifs: [...state.favGifs, action.params]}
    case WITHDRAW_FAV:
      var indexDelete;
      state.favGifs.map((fav,index)=>{
        fav===action.id?indexDelete=index:indexDelete=-1;
      });
      const favGifs=state.favGifs.splice(indexDelete,1);
      return {...state, favGifs}
    default:
      return state;
  }
}

export default favReducer;