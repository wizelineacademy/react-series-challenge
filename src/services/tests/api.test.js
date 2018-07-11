import axios from 'axios';
import api from '../api';

jest.mock('axios');

describe('api service', () => {
  it('trending function should return a response a data prop filled with an array of gifs objects, a meta and a pagination objects', () => {
    const resp = {
      data: {
        data: [{ id: 'gif.1' }, { id: 'gif.2' }],
        meta: { status: 200 },
        pagination: { total_count: 9999, offset: 0, count: 40 },
      },
    };

    axios.get.mockImplementation(() => Promise.resolve(resp));

    return api.trending().then(result => {
      expect(result).toEqual(resp);
    });
  });
});
