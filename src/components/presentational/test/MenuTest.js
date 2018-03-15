import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import Menu from '../Menu';
import Header from '../Header';

describe('Menu', () => {
  it('should render without crashing', () => {
    const sections = [
      { route: 'test', title: 'Test' , component: Header },
    ];
    const testMenu = shallow(<Menu items={sections} />);    

    expect(shallowToJson(testMenu)).toMatchSnapshot()
  })
})


