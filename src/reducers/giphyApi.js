import { handleActions } from 'redux-actions';
import { receiveTrendingGifs, receiveNextPageTrendingGifs } from '../actions/giphyApi';
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
  [receiveNextPageTrendingGifs]: {
    next(state, action) {
      const { gifs: nextGifs } = action.payload;
      const { gifs: currentGifs } = state;
      const gifs = { ...currentGifs, ...nextGifs };
      return { ...state, gifs };
    },
    throw(state, action) {
    }
  }
}, { gifs: {} });

export default reducer;