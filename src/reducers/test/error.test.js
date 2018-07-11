import { ERROR_STATUS } from '../../actions/types';
import reducer from '../error';

const cleanState = {
  err: false,
  info: {},
};

const dataState = {
  err: true,
  info: {
    message: '404 Page Not Found',
    code: 404,
  },
};

describe('test Search Reducer', () => {
  it('test default case', () => {
    const result = reducer(dataState, { type: 'NO_ACTION', payload: '123' });
    expect(result).toEqual(dataState);
  });
  it('should test action case', () => {
    const result = reducer(cleanState, {
      type: ERROR_STATUS,
      payload: {
        err: true,
        info: {
          message: '404 Page Not Found',
          code: 404,
        },
      },
    });
    expect(result).toEqual(dataState);
  });
});
