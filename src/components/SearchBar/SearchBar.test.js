import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchBar from "./SearchBar";

describe('HomeView component', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SearchBar
        onSearch={jest.fn}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  })
});