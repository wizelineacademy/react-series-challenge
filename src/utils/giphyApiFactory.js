import {GIPHY_API_KEY} from '../config/config';

const TRENDING_TYPE = 'trending_type';
const SEARCH_TYPE = 'search_type';

/**
 * Creates a query parameter segment.
 * @param  {string}  name                 name of the parameter
 * @param  {string}  value                value of the parameter
 * @param  {Boolean} isFirst              adds a prefix to the segment, if true
 *                                        it will add '?' else it will add '&'
 * @param  {string}  queryBufferReference query buffer to check if there is not
 *                                        null to override the isFirst value.
 * @return {string}                       the generated segmen
 */
const appendParameterToQuery = (name, value, isFirst, queryBufferReference) => {
  let result = '';

  if (name && value) {
    // If queryBufferReference lenght is 0 override the isFirstVariable
    if (queryBufferReference && queryBufferReference.length === 0) {
      isFirst = true;
    }
    let concatenator = (isFirst) ? '?' : '&';
    result += `${concatenator}${name}=${value}`
  }

  return result;
}

/**
 * Returns a function with the fetch promise inside
 * @param  {string} fullUrl the endpoint url with all the details.
 * @return {function}       the generated function.
 */
const createAndNormalizeFetch = (fullUrl) => (
  () => fetch(fullUrl)
    .then(response => response.json()
      .then(json => ({ json, response }))
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json;
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Unknown error'})
    )
);

const create = (type, options) => {
  const host = 'http://api.giphy.com';

  let queryDetails = appendParameterToQuery('api_key', GIPHY_API_KEY, true);
  if (options) {
    queryDetails += appendParameterToQuery('limit', options.limit, false, queryDetails);
    queryDetails += appendParameterToQuery('offset', options.offset, false, queryDetails);
    queryDetails += appendParameterToQuery('rating', options.rating, false, queryDetails);
  }

  switch(type) {
    case TRENDING_TYPE:
      return createAndNormalizeFetch(`${host}/v1/gifs/trending${queryDetails}`);
    case SEARCH_TYPE:
      if (options) {
        // Replace all the spaces with a + as the GIPHY API says.
        let normalizeSearchText = (options.search) ? options.search : '';
        normalizeSearchText = normalizeSearchText.replace(' ', '+');
        queryDetails += appendParameterToQuery('q', normalizeSearchText, false, queryDetails);
        queryDetails += appendParameterToQuery('lang', options.languaje, false, queryDetails);
      }

      return createAndNormalizeFetch(`${host}/v1/gifs/search${queryDetails}`);
    default:
      return () => {};
  }
};

export {
  TRENDING_TYPE,
  SEARCH_TYPE
};
export default create;
