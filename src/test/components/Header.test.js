import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

describe('Header component', () => {
  test('should shallow correctly', () => {
    const header = shallow(<Header />);

    expect(header).toMatchSnapshot();
  });
});
