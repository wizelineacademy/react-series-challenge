import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import NavLink from '../components/NavLink';

describe('NavLink', () => {
  it('Should render correctly', () => {
    const output = shallow(
      <NavLink to="/test"/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
