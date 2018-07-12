const FAVORITE_ADD = 'FAVORITE_ADD';
const FAVORITE_ADD_TO_STATE = 'FAVORITE_ADD_TO_STATE';
const FAVORITE_REMOVE = 'FAVORITE_REMOVE';
const FAVORITE_REMOVE_FROM_STATE = 'FAVORITE_REMOVE_FROM_STATE';
const FAVORITE_HYDRATE = 'FAVORITE_HYDRATE';
const FAVORITE_FETCH = 'FAVORITE_FETCH';

const addFavorite = ({ payload }) => ({ type: FAVORITE_ADD, payload });
const addFavoriteToState = ({ payload }) => ({ type: FAVORITE_ADD_TO_STATE, payload });
const removeFavorite = ({ payload }) => ({ type: FAVORITE_REMOVE, payload });
const removeFavoriteFromState = ({ payload }) => ({ type: FAVORITE_REMOVE_FROM_STATE, payload });
const hydrateFavorite = ({ payload }) => ({ type: FAVORITE_HYDRATE, payload });
const fetchFavorite = () => ({ type: FAVORITE_FETCH });

export default {
  types: {
    FAVORITE_ADD,
    FAVORITE_ADD_TO_STATE,
    FAVORITE_REMOVE,
    FAVORITE_REMOVE_FROM_STATE,
    FAVORITE_HYDRATE,
    FAVORITE_FETCH,
  },
  creators: {
    addFavorite,
    removeFavorite,
    addFavoriteToState,
    removeFavoriteFromState,
    hydrateFavorite,
    fetchFavorite,
  },
};
