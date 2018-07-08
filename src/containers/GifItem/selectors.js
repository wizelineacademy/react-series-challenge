const propsSelector = (state, props) => {
  const isFavorite = state.favorites.favoritesIds.indexOf(props.id) > -1;
  return {
    isFavorite,
  };
};

export default {
  propsSelector,
};
