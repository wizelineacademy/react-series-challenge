import searchFavoriteGifsActions from "../actions/searchFavoriteGifs";

const initialState = {};

const searchFavoriteReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case searchFavoriteGifsActions.types.GET_FAVORITE_SEARCH_GIFS: {
      const { query, favoriteGifs } = payload;
      const favoriteSeacrhGifs = [];
      Object.keys(favoriteGifs).map(key => {
        const title = favoriteGifs[key].title;
        const regex = new RegExp(query);
        const match = title && title.match(regex);
        if (query && match) {
          favoriteSeacrhGifs.push(key);
        }
      });
      const newState = favoriteSeacrhGifs;
      return newState;
    }
    default:
      return state;
  }
};

export default searchFavoriteReducer;
