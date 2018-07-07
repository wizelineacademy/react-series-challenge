const gifsSelector = state => state.gifs;
const homeSelector = state => {
  return {
    gifs: state.home.gifs,
    isLoading: state.home.isLoading,
  };
};

export default {
  gifsSelector,
  homeSelector,
};
