import { SET_FAVORITES } from '../actions/types';
import reducer from './favorites';

const dataState = {
  favorites: [
    {
      title: 'Funny Cats Gif',
      images: {
        original: 'https://www.google.com',
      },
    },
    {
      title: 'Batman Gif',
      images: {
        original: 'https://www.google.com',
      },
    },
    {
      title: 'Code Wars Gif',
      images: {
        original: 'https://www.google.com',
      },
    },
    {
      title: 'React Gif',
      images: {
        original: 'https://www.google.com',
      },
    },
    {
      title: 'Rick and Morthy Gif',
      images: {
        original: 'https://www.google.com',
      },
    },
  ],
};

const cleanState = {
  favorites: [],
};

describe('test Search Reducer', () => {
  it('should test default case dataState', () => {
    const result = reducer(dataState, { type: 'NO_ACTION', payload: '123' });
    expect(result).toEqual(dataState);
  });
  it('should test action case', () => {
    const result = reducer(cleanState, {
      type: SET_FAVORITES,
      payload: dataState.favorites,
    });
    expect(result).toEqual(dataState);
  });
  it('should test default case 2 cleanState', () => {
    const result = reducer(cleanState, { type: 'NO_ACTION', payload: '123' });
    expect(result).toEqual(cleanState);
  });
});
