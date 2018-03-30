import { SET_DETAILS } from '../actions/types';
import reducer from '../reducers/details_reducer';

const dataState = {
  detailsImage: {
    title: 'Emma Watson Gif',
    images: {
      original: 'https://www.google.com'
    }
  }
}

const cleanState = {
  detailsImage: {}
}

describe('test Search Reducer', () => {
  it('test default case', () => {
    const result = reducer(cleanState, { type:'NO_ACTION', payload:'123' });
    expect(result).toEqual(cleanState);
  })
  it('test action case', () => {
    const result = reducer(cleanState, {
      type: SET_DETAILS,
      payload: { ...dataState.detailsImage}
    });
    expect(result).toEqual(dataState);
  })
  it('change default case 2', () =>{
    const result = reducer(dataState, {
      type: 'CHANGE_INPUT',
      payload: {
        target: {
          value: 'Hola Mundo'
        }
      }
    });
    expect(result).toEqual(dataState);
  })
})