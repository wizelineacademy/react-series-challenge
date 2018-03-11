const baseUrl = process.env.REACT_APP_GIPHY_API_BASE_URL;
const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;

const defaultOptions = {
  method: 'get',
  queryParams: {
    api_key: giphyApiKey,
    rating: 'R'
  }
}

/**
 * params will be an object like
 * {
 *   parameter1: value1,
 *   paremeter2: value2
 * }
 */
const buildQueryParamsString = params => Object.keys(params)
  .map(key => `${window.encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  .join('&');

export const fetcher = (path, options) => {
  // spreading to separate queryParams from required fetch options
  const { queryParams, ...finalOptions } = { ...defaultOptions, ...options };
  return window.fetch(
    `${baseUrl}${path}?${buildQueryParamsString(queryParams)}`,
    finalOptions
  ).then(res => res.json());
};
