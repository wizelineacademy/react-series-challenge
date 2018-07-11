import React from 'react';
import { shallow } from 'enzyme';
import Header from 'components/header/Header'

describe('Header', () => {
  test('renders properly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot()
  })
});
