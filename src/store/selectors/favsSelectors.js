export const initialState = [];

export const getFavsData = (state = initialState) => {
  const favorites =
    state !== undefined && state.FAVORITES !== undefined ? state.FAVORITES : {};

  const favArray = Object.values(favorites).map(favorite => {
    return favorites[favorite.id];
  });

  return favArray;
};
