import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from 'components/searchBar/SearchBar'

describe('SearchBar', () => {
  test('renders properly', () => {
    const component = shallow(<SearchBar />);
    expect(component).toMatchSnapshot()
  })

  test('receives onChange prop', () => {
    let wrapper = shallow(<SearchBar />)
    const mockChange = jest.fn();
    wrapper.setProps({ onChange: mockChange });
    wrapper.find('input').simulate(
      'change', { payload: 'test' }
    )
    expect(mockChange.mock.calls.length).toBe(1);
  });
});
