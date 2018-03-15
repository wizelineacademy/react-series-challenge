import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  it('matches Navbar snapshot', () => {
    const wrapper = shallow(
      <Navbar/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
