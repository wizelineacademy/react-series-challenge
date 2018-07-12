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

  it('search function, with a param as it search term, should return a response a data prop filled with an array of gifs objects, a meta and a pagination objects', () => {
    const resp = {
      data: {
        data: [
          { id: 'gif.1', title: 'cat lmao' },
          { id: 'gif.2', title: 'funny cat' },
        ],
        meta: { status: 200 },
        pagination: { total_count: 99, offset: 0, count: 40 },
      },
    };

    axios.get.mockImplementation(() => Promise.resolve(resp));

    return api.search('cat').then(result => {
      expect(result).toEqual(resp);
    });
  });

  it('gifs function, with an array of ids as param, should return a response a data prop filled with an array of gifs objects, a meta and a pagination objects', () => {
    const resp = {
      data: {
        data: [{ id: 'gif.9' }, { id: 'gif.12' }],
        meta: { status: 200 },
        pagination: { total_count: 9999, offset: 0, count: 40 },
      },
    };

    axios.get.mockImplementation(() => Promise.resolve(resp));

    return api.gifs({ gifs: ['gif.9', 'gif.12'] }).then(result => {
      expect(result).toEqual(resp);
    });
  });
});
