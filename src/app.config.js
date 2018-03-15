const { REACT_APP_GIPHY_KEY } = process.env;

export default {
  api: {
    url: 'http://api.giphy.com/v1/gifs',
    key: REACT_APP_GIPHY_KEY,
  },
};
