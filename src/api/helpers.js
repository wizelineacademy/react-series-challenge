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
export const buildQueryParamsString = params => Object.keys(params)
  .map(key => `${window.encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  .join('&');

export const fetcher = async (path, options = { queryParams: {} }) => {
  // spreading to separate queryParams from required fetch options
  const { queryParams, ...finalOptions } = {
    ...defaultOptions,
    ...options,
    queryParams: {
      ...defaultOptions.queryParams,
      ...options.queryParams
    }
  };

  try {
    const response = await window.fetch(
      `${baseUrl}${path}?${buildQueryParamsString(queryParams)}`,
      finalOptions
    );

    if (response.status >= 200 && response.status < 300) {
      return (await response.json());
    }

    throw new Error(`Response with status code: ${response.status}`);
  } catch(e) {
    throw new Error(e);
  }
};
