const validateEndpoint = (endpoint, search) =>
  endpoint === 'search' ? `?q=${search}` : '';

export const fetchGifs = ({ url, api_key, limit, endpoint, search }) =>
  axios
    .get(
      `${url}${endpoint}${validateEndpoint(
        endpoint,
        search
      )}&${api_key}&${limit}`
    )
    .then(response => response.data);

export default {
  fetchGifs,
};
