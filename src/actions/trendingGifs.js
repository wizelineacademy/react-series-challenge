import { createAction } from "redux-actions";

const FETCH_TRENDING_GIFS = "FETCH_TRENDING_GIFS";
const GET_TRENDING_GIFS = "GET_TENDING_GIFS";

const fetchTrendingGifs = createAction(FETCH_TRENDING_GIFS);
const getTrendingGifs = createAction(GET_TRENDING_GIFS);

export default {
  types: {
    FETCH_TRENDING_GIFS,
    GET_TRENDING_GIFS
  },
  creators: {
    fetchTrendingGifs,
    getTrendingGifs
  }
};
