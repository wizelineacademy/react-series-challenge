const gifsSelector = state => state.gifs;
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
  console.log('state.favorites.gifs', state.favorites.gifs);
  return {
    gifs: state.favorites.gifs,
  };
};

const gifModalSelector = state => {
  return {
    isOpen: state.gifModal.isOpen,
    gif: state.gifModal.gif,
  };
};
export default {
  gifsSelector,
  homeSelector,
  favoritesIdsSelector,
  favoritesSelector,
  gifModalSelector,
};
