import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import FavSection from '../FavSection';

describe('Favorite section', () => {
  it('should render without crashing', () => {
    const testFavSection = shallow(<FavSection inFavs />);    

    expect(shallowToJson(testFavSection)).toMatchSnapshot()
  })

  it('should render the correct text', () => {
    const testFavSection = shallow(<FavSection />);    

    expect(testFavSection.find('span').text()).toBe('Add to favorites');
  })
})

