const FILTER_TRENDING_TEXT_UPDATE = 'FILTER_TRENDING_TEXT_UPDATE';

const updateFilterTrendingText = ({ payload }) => ({ type: FILTER_TRENDING_TEXT_UPDATE, payload });

export default {
  types: {
    FILTER_TRENDING_TEXT_UPDATE,
  },
  creators: {
    updateFilterTrendingText,
  },
};
