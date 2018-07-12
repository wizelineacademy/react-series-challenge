import {
  QUERY_TRENDING,
  QUERY_TRENDING_ERROR,
  QUERY_TRENDING_SUCCESS
} from './action';

const initialState = {
  trendingGifs: [],
  trendingLoading: true
};

function trendingReducer(state = initialState, action) {
  
  switch (action.type) {
    case QUERY_TRENDING:
      return {...state,trendingLoading:true}
    case QUERY_TRENDING_SUCCESS:
      const { data } = action.data;
        return {...state,trendingLoading:false,trendingGifs:data};
    case QUERY_TRENDING_ERROR:
      return {...state,trendingGifs:null, trendingLoading:false}
    default:
      return state;
  }
}

export default trendingReducer;