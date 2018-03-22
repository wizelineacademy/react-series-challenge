const API_ROOT = "http://api.giphy.com/v1/gifs";

const API_SEARCH = `${API_ROOT}/search`;
const API_TRENDING = `${API_ROOT}/trending`;

const buildQueryParams = params =>
  Object.keys(params).reduce(
    (string, key) => string.concat(key, "=", params[key], "&"),
    "?"
  );

const request = endpoint => mapping => {
  const config = Object.assign(mapping, {
    api_key: process.env.REACT_APP_API_KEY
  });
  const params = buildQueryParams(config);
  const query = endpoint.concat(params);
  return fetch(query).then(response => response.json());
};

const search = request(API_SEARCH);
const trending = request(API_TRENDING);

const searchGifs = ({ ...config }) => search(config);
const getTrendingGifs = ({ ...config }) => trending(config);
const getGifById = ({ id, ...config }) => request(`${API_ROOT}/${id}`)(config);

export { searchGifs, getTrendingGifs, getGifById };
