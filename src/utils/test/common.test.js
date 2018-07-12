import axios from 'axios';
import { fetchGifs, validateEndpoint } from '../common';

jest.mock('axios');

describe('Common Utils', () => {
  it('should test fetching data from api', () => {
    const url = 'http://api.giphy.com/v1/gifs/';
    const api_key = process.env.REACT_APP_GIPHY_API_KEY;
    const limit = 10;
    const enpoint = '';
    const search = '';
    const params = { url, api_key, limit, enpoint, search };
    const response = {
      data: [{ id: 'gif.1' }, { id: 'gif.2' }],
    };

    axios.get.mockImplementation(() => Promise.resolve(response));

    return fetchGifs(params).then(result => {
      expect(result).toEqual(response.data);
    });
  });

  it('should test fetching data from search api', () => {
    const url = 'http://api.giphy.com/v1/gifs/';
    const api_key = process.env.REACT_APP_GIPHY_API_KEY;
    const limit = 10;
    const enpoint = 'search';
    const search = 'cat';
    const params = { url, api_key, limit, enpoint, search };
    const response = {
      data: [{ id: 'cat.1' }, { id: 'cat.2' }],
    };

    axios.get.mockImplementation(() => Promise.resolve(response));

    return fetchGifs(params).then(result => {
      expect(result).toEqual(response.data);
    });
  });

  it('should return a search query', () => {
    const endpoint = 'search';
    const search = 'cat';
    const result = '&q=cat';
    const query = validateEndpoint(endpoint, search);

    expect(query).toEqual(result);
  });
});
