import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from 'components/searchBar/SearchBar'
import 'jest-styled-components'

describe('SearchBar', () => {
  test('renders properly', () => {
    const component = shallow(<SearchBar />);
    expect(component).toMatchSnapshot()
  })
});
