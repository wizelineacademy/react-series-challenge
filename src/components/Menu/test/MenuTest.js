/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Menu from '..';

describe('Menu', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Menu location={'/test'} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should be defined', () => {
   expect(Menu).toBeDefined();
  });
});
