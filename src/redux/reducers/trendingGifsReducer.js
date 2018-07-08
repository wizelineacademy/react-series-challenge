import trendingGifsActions from "../actions/trendingGifs"

const initialState={
  type:"",
  data:""
};

const trendingGifsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
  
  switch (type) {
    case trendingGifsActions.types.REQUEST_TRENDING_GIFS: {
      const { data } = payload;
      const newState = { ...data };

      return newState;
    }
    default:
      return state;
  }
};

export default trendingGifsReducer;