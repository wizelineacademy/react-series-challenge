import {
  QUERY_SEARCH,
  QUERY_SEARCH_ERROR,
  QUERY_SEARCH_SUCCESS
} from './action';

const initialState = {
  searchGifs: [],
  searchLoading: true
};

function searchReducer(state = initialState, action) {
  
  switch (action.type) {
    case QUERY_SEARCH:
      return {...state,searchLoading:true}
    case QUERY_SEARCH_SUCCESS:
      const { pagination, data } = action.data;
      const total = pagination ? pagination.total_count : 0;
        return {...state,searchLoading:false,searchTotal:total,searchGifs:data};
    case QUERY_SEARCH_ERROR:
      return {...state,searchGifs:null, searchLoading:false}
    default:
      return state;
  }
}

export default searchReducer;