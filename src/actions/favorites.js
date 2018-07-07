import { createActions } from 'redux-actions';

const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

const { addToFavorites, removeFromFavorites } = createActions({
  [ADD_TO_FAVORITES]: (id) => ({ gifId: id }),
  [REMOVE_FROM_FAVORITES]: (id) => ({ gifId: id }),
});

export {
  addToFavorites,
  removeFromFavorites,
}

