import { handleActions } from 'redux-actions';
import { toggleFavoriteGif } from '../actions/favorites';

const reducer = handleActions({
  [toggleFavoriteGif]: {
    next(state, action) {
      const { gif } = action.payload;
      const gifs = { ...state.gifs }
      const storedGif = gifs[gif.id];
      if (!storedGif) {
        gif.liked = true;
        gifs[gif.id] = gif;
      } else {
        delete gifs[gif.id];
      }
      return { ...state, gifs }
    },
    throw(state, action) {
    }
  }
}, { gifs: {} });

export default reducer;