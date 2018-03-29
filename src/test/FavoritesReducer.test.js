import { SET_FAVORITES }from '../actions/types';
import reducer from '../reducers/favorites_reducer';

const dataState = {
  favorites: [
    {
      title: 'Emma Watson Gif',
      images: {
        original: 'https://www.google.com'
      }
    },
    {
      title: 'Fast and Furious Gif',
      images: {
        original: 'https://www.google.com'
      }
    },
    {
      title: 'Gal Gadot Gif',
      images: {
        original: 'https://www.google.com'
      }
    },
    {
      title: 'Coding Gif',
      images: {
        original: 'https://www.google.com'
      }
    },
    {
      title: 'Luke Skywalker Gif',
      images: {
        original: 'https://www.google.com'
      }
    }
  ]
}

const cleanState = {
  favorites: []
}

describe('test Search Reducer', () => {
  it('test default case', () => {
    const result = reducer(dataState,{ type:'NO_ACTION', payload:'123' });
    expect(result).toEqual(dataState);
  })
  it('test action case', () => {
    const result = reducer(cleanState,{ type: SET_FAVORITES, payload: dataState.favorites });
    expect(result).toEqual(dataState);
  })
  it('test default case 2', () => {
    const result = reducer(cleanState,{ type:'NO_ACTION', payload:'123' });
    expect(result).toEqual(cleanState);
  })
})