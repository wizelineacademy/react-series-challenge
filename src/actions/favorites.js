const SET_FAVORITE = 'SET_FAVORITE';
const setFavorite = (payload = {}) => ({ type: SET_FAVORITE, payload })

export default {
  types: {
    SET_FAVORITE
  },
  creators: {
    setFavorite
  },
};
