import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import Giphy from '../Giphy';
import giphyMock from './mocks/giphyMock.json';

describe('Giphy', () => {
  it('should render without crashing', () => {
    const testGiphy = shallow(<Giphy.WrappedComponent giphy={giphyMock.data} favorites={[]} />);    

    expect(shallowToJson(testGiphy)).toMatchSnapshot()
  })

  it('should include Link', () => {
    const testGiphy = shallow(<Giphy.WrappedComponent giphy={giphyMock.data} favorites={[]} />);    

    expect(testGiphy.find('Link')).toBeDefined()
  })

  it('should include FavSection', () => {
    const testGiphy = shallow(<Giphy.WrappedComponent giphy={giphyMock.data} favorites={[]} />);    

    expect(testGiphy.find('FavSection')).toBeDefined()
  })
})


