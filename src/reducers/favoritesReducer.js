import favoriteActions from '../actions/favoriteActions';

const initialState = [];

const favoritesReducer = (favorites = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favoriteActions.types.TOGGLE_FAVORITE:
      const index = favorites.findIndex((fav) => fav.id === payload.id);

      if(index === -1) {
        return [
          ...favorites,
          {
            id: payload.id,
            images: {
              downsized: {
                url: payload.url
              }
            },
            title: payload.title
          }
        ]
      } else {
        return [
          ...favorites.slice(0, index),
          ...favorites.slice(index + 1)
        ];
      }

    default:
      return favorites;
  }
};

export default favoritesReducer;
