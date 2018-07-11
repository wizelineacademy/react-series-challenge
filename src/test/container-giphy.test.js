import React from 'react';
import { shallow } from 'enzyme';
import ContainerGiphysFavorites from '../../src/giphy-favorite/container/container-giphys-favorites';

describe('ContainerGiphysFavorites component', () => {
  test('should shallow correctly', () => {
      expect(shallow(
        <ContainerGiphysFavorites />
      )).toMatchSnapshot() 
  })
})