const GIPHY_REQUEST = 'giphy_request';
const GIPHY_FAILED = 'giphy_failed';
const GIPHY_COMPLETED = 'giphy_completed'

const giphyRequest = (id) => ({ type: GIPHY_REQUEST, id });
const giphyCompleted = (gif) => ({ type: GIPHY_COMPLETED, gif });
const giphyFailed = (error) => ({ type: GIPHY_FAILED, error });


export default {
  types: {
    GIPHY_REQUEST,
    GIPHY_FAILED,
    GIPHY_COMPLETED,
  },
  creators: {
    giphyRequest,
    giphyCompleted,
    giphyFailed,
  },
};