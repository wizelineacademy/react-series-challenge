import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import Header from '../Header';

describe('Header section', () => {
  it('should render without crashing', () => {
    const testHeader = shallow(<Header inFavs />);    

    expect(shallowToJson(testHeader)).toMatchSnapshot()
  })

  it('should render the correct text', () => {
    const testHeader = shallow(<Header />);    

    expect(testHeader.find('h1').text()).toBe('Giphy Collection');
  })
})


