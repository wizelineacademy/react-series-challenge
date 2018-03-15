import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import MenuItemList from '../MenuItemList';
import Header from '../Header';

describe('Menu Item List', () => {
  it('should render without crashing', () => {
    const sections = [
      { route: 'test', title: 'Test' , component: Header },
    ];
    const testMenuItemList = shallow(<MenuItemList items={sections} />);    

    expect(shallowToJson(testMenuItemList)).toMatchSnapshot()
  })
})


