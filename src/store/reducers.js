const defaultState = {
  trendingGifs: [],
  error: '',
  count: 0,
  loading: false,
  singleGif: null
}

const counter = (state = defaultState, action) => {
  let count = state.count

  switch(action.type) {
    case 'LOADING_START':
      return { ...state, loading: true }
    case 'LOADING_END':
      return { ...state, loading: false }
    case 'INCREMENT':
      count += action.payload.amount
      return { ...state, count }
    case 'DECREMENT':
      count -= 1
      return { ...state, count }
    case 'FETCH_SUCCEEDED':
      const trendingGifs = action.trendingGifs.data
      return {...state, trendingGifs};
    case 'FETCH_FAILED':
      return { ...state, error: action.payload.message }
    case 'FETCHED_SINGLE':
      return { ...state, singleGif: action.singleGif.data };
    case 'FETCHED_SEARCH':
      return {...state, trendingGifs: action.searchGifs.data};

    default:
       return state;
   }
};
export default counter
