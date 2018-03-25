import favoritesGifs from '../actions/favoritesGifs';
const persistance = (store) => (next) => (action) => {
  const { type } = action;
  if (
    type === favoritesGifs.types.ADD_GIF ||
    type === favoritesGifs.types.REMOVE_GIF
  ) {
    const nextMiddlewares = next(action);
    const stateAfter = store.getState();
    localStorage.setItem('favoritesGifs', JSON.stringify(stateAfter.favoritesGifs));
    return nextMiddlewares;
  } else {
    return next(action);
  }
};

export default persistance;