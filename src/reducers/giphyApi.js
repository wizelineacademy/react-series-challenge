import { handleActions } from 'redux-actions';
import { receiveTrendingGifs } from '../actions/giphyApi';
import { toggleFavoriteGif } from '../actions/favorites';

const reducer = handleActions({
  [receiveTrendingGifs]: {
    next(state, action) {
      const { gifs } = action.payload;
      return { ...state, gifs };
    },
    throw(state, action) {
      return state;
    }
  },
  [toggleFavoriteGif]: {
    next(state, action) {
      const { gif } = action.payload;
      const gifs = { ...state.gifs }
      const storedGif = gifs[gif.id]
      storedGif.liked = !storedGif.liked;
      return { ...state, gifs };
    },
    throw(state, action) {
    }
  },
}, { gifs: {} });

export default reducer;