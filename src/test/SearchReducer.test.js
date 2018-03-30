import { CLEAR_INPUT, CHANGE_INPUT } from '../actions/types';
import reducer from '../reducers/search_reducer';

const state = {
  inputString: 'Hola Mundo'
}

const cleanState = {
  inputString: ''
}

describe('test Search Reducer', () => {
  it('test default case', () => {
    const result = reducer(state, { type:'NO_ACTION', payload:'123' });
    expect(result).toEqual(state);
  })
  it('test clear case', () => {
    const result = reducer(state, { type: CLEAR_INPUT, payload:'123' });
    expect(result).toEqual(cleanState);
  })
  it('change input case', () =>{
    const result = reducer(cleanState, {
      type: CHANGE_INPUT,
      payload: {
        target: {
          value: 'Hola Mundo'
        }
      }
    });
    expect(result).toEqual(state);
  })
})