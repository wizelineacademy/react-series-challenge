import axios from 'axios';

export const validateEndpoint = (endpoint, search) =>
  endpoint === 'search' ? `&q=${search}` : '';

export const fetchGifs = ({ url, api_key, limit, endpoint, search }) =>
  axios
    .get(
      `${url}${endpoint}?api_key=${api_key}${validateEndpoint(
        endpoint,
        search
      )}&limit=${limit}`
    )
    .then(response => response.data);

export default {
  fetchGifs,
  validateEndpoint,
};
