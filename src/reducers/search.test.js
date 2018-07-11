import { CLEAR_INPUT, CHANGE_INPUT } from '../actions/types';
import reducer from './search';

const state = {
  inputString: 'Funny Cats',
};

const cleanState = {
  inputString: '',
};

describe('Search Reducer', () => {
  it('should test default case', () => {
    const result = reducer(state, { type: 'NO_ACTION', payload: '123' });
    expect(result).toEqual(state);
  });
  it('should test clear case', () => {
    const result = reducer(state, { type: CLEAR_INPUT, payload: '123' });
    expect(result).toEqual(cleanState);
  });
  it('should change input case', () => {
    const result = reducer(cleanState, {
      type: CHANGE_INPUT,
      payload: {
        target: {
          value: 'Funny Cats',
        },
      },
    });
    expect(result).toEqual(state);
  });
});
