const TRENDING_FETCH = 'TRENDING_FETCH';
const TRENDING_GET = 'TRENDING_GET';
const TRENDING_SEARCH = 'TRENDING_SEARCH';

const fetchTrending = () => ({ type: TRENDING_FETCH });
const getTrending = ({ payload }) => ({ type: TRENDING_GET, payload });
const searchTrending = ({ payload }) => ({ type: TRENDING_SEARCH, payload });

export default {
  types: {
    TRENDING_FETCH,
    TRENDING_GET,
    TRENDING_SEARCH,
  },
  creators: {
    fetchTrending,
    getTrending,
    searchTrending,
  },
};
