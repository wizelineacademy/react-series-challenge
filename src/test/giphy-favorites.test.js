import React from 'react';
import { shallow } from 'enzyme';
import GiphyFavorite from '../../src/giphy-favorite/components/giphy-favorite';

describe('GiphyFavorite component', () => {
  test('should shallow correctly', () => {
      expect(shallow(
        <GiphyFavorite />
      )).toMatchSnapshot() 
  })
})