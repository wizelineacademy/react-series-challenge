import axios from 'axios';

const makeAxiosRequest = (method, url, params, payload, headers) => {
  const request = { method, url };
  if (params) request.params = params;
  if (payload) request.data = payload;
  if (headers) request.headers = headers;

  return axios.request(request)
    .catch(error =>
      Promise.reject(!error.response
        ? new Error('Unable to establish connection to server')
        : error.response.data.errors[0]));
};

export default makeAxiosRequest;
