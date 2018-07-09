const TRENDING_FETCH = 'TRENDING_FETCH';
const TRENDING_GET = 'TRENDING_GET';

const fetchTrending = () => ({ type: TRENDING_FETCH });
const getTrending = ({ payload }) => ({ type: TRENDING_GET, payload });

export default {
  types: {
    TRENDING_FETCH,
    TRENDING_GET,
  },
  creators: {
    fetchTrending,
    getTrending,
  },
};
