import gifsActions from '../actions/gifs';

const { types } = gifsActions;

const saveFavorites = store => next => action => {
  const { type } = action;
  const nextMiddlewares = next(action);
  const stateAfterReducers = store.getState();

  if (type === types.TOGGLE_FAVORITE) {
    const {
      data: { favorites }
    } = stateAfterReducers;
    console.log(stateAfterReducers);

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  return nextMiddlewares;
};

export default saveFavorites;
