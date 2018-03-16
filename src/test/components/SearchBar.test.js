import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, StyledSearchInput } from '../../components/SearchBar';

describe('<SearchBar />', () => {
  it('should use the query as the value for the input', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<SearchBar query='foo' searchGifsChangeQuery={mockFn} />);

    const inputWrapper = wrapper.find(StyledSearchInput);
    expect(inputWrapper.props().value).toEqual('foo');
  });

  it('should call searchGifsChangeQuery when the input changes', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<SearchBar query='foo' searchGifsChangeQuery={mockFn} />);

    const inputEvent = { target: { value: 'bar' } };
    const inputWrapper = wrapper.find(StyledSearchInput);
    inputWrapper.simulate('change', inputEvent);
    expect(mockFn).toHaveBeenCalledWith(inputEvent.target.value);
  });
});
