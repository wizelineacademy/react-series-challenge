import { handleAction } from 'redux-actions';
import { receiveTrendingGifs } from '../actions/giphyApi';

const reducer = handleAction(receiveTrendingGifs, {
  next(state, action) {
    const { gifs } = action.payload;
    return { ...state, trendingGifs: gifs };
  },
  throw(state, action) {
    return state;
  }
}, { trendingGifs: [] });

export default reducer;