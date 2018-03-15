import { buildQueryParamsString } from '../../api/helpers';

describe('API helpers', () => {
  describe('buildQueryParamsString', () => {
    it('should turn queryParams object into expected query string', () => {
      const params = {
        parameter1: 'value1',
        parameter2: 'value2'
      };
      const expected = `parameter1=value1&parameter2=value2`;

      expect(buildQueryParamsString(params)).toEqual(expected);
    });

    it('should encode the key value pairs', () => {
      const params = {
        'parameter 1': 'value 1',
        'parameter 2': 'value 2',
      };
      const expected = `parameter%201=value%201&parameter%202=value%202`;

      expect(buildQueryParamsString(params)).toEqual(expected);
    });
  });
});
