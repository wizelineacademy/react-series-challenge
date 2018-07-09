import actions from '../actions';

const { TOGGLE_FAVORITE } = actions.types;

const saveFavorites = (store) => (next) => (action) => {
  const nextMiddlewares = next(action);
  if (action.type == TOGGLE_FAVORITE) {
    localStorage.setItem(
      'gif-favs', 
      JSON.stringify(store.getState().favorites)
    );
  }
  return nextMiddlewares;
}

export default saveFavorites;