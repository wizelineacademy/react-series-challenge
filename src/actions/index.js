const GET_TRENDING = 'GET_TRENDING';
const TRENDING_FETCHED = 'TRENDING_FETCHED';

const getTrendingGifs = () => ({type: GET_TRENDING, payload: null});
const trendingGifsFetched = (payload = {}) => ({type: TRENDING_FETCHED, payload});

export default {
  types: {
    GET_TRENDING,
    TRENDING_FETCHED
  },
  creators: {
    getTrendingGifs,
    trendingGifsFetched
  }
}