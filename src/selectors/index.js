const homeSelector = state => {
  return {
    gifs: state.home.gifs,
    isLoading: state.home.isLoading,
  };
};

const favoritesIdsSelector = state => {
  return state.favorites.favoritesIds;
};

const favoritesSelector = state => {
  return {
    gifs: state.favorites.filteredGifs,
  };
};

const gifModalSelector = state => {
  return {
    isOpen: state.gifModal.isOpen,
    gif: state.gifModal.gif,
    isFavorite: state.gifModal.gif
      ? state.favorites.favoritesIds.indexOf(state.gifModal.gif.id) > -1
      : false,
  };
};

const locationSelector = state => {
  return {
    path: state.location.path,
  };
};

export default {
  homeSelector,
  favoritesIdsSelector,
  favoritesSelector,
  gifModalSelector,
  locationSelector,
};
