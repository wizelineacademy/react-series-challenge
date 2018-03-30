import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('Should render correctly', () => {
    const output = shallow(
      <SearchBar/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
