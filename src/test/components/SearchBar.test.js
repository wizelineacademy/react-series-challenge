import React from 'react';
import { shallow } from 'enzyme';

import { SearchBar } from '../../components/SearchBar';

describe('Header component', () => {
  test('should shallow correctly', () => {
    const header = shallow(<SearchBar />);

    expect(header).toMatchSnapshot();
  });
});
