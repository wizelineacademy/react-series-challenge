import React from 'react';
import { shallow, mount } from 'enzyme';
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
  });
  it('submit event when clicked', () => {
    const onSearchFn = jest.fn();
    const output = mount(
      <SearchBar
        onSearch={onSearchFn}
      />
    );
    output.find('form').simulate('submit');
    expect(onSearchFn.mock.calls.length).toBe(1);
  });
});