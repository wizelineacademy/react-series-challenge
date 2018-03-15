import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import MenuItem from '../MenuItem';

describe('Menu Item', () => {
  it('should render without crashing', () => {
    const testMenuItem = shallow(<MenuItem section={{ route: '/test' }} />);    

    expect(shallowToJson(testMenuItem)).toMatchSnapshot()
  })
})

