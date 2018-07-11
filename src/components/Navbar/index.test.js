import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';

describe('Navbar Component', () => {
  it('should render the navbar correctly', () => {
    const component = shallow(<Navbar />);
    expect(component).toMatchSnapshot();
  });
});
