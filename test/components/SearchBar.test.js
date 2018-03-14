import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import SearchBar from '../../src/components/SearchBar';

const ENTER_KEY = {
  keyCode: 13,
  which: 13,
  key: 'enter'
};
const NOT_ENTER_KEY = {
  keyCode: 14,
  which: 14,
  key: 'not_enter'
};

describe('SearchBar', () => {
  let props;
  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      history: [],
    }
  })

  it('should render correctly', () => {
    const tree = renderer
    .create(
      <SearchBar {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();  
  });

  it('should call the handleSubmit callback when enter key is pressed', () => {
    document.body.innerHTML = '<input id="search-bar" value="" />';
    const output = shallow(
      <SearchBar {...props} />, { attachTo: document.body }
    );
    expect(props.handleSubmit.mock.calls.length).toBe(0);
    output.find('#search-bar').simulate('keyUp', NOT_ENTER_KEY);
    output.find('#search-bar').simulate('keyUp', ENTER_KEY);
    expect(props.handleSubmit.mock.calls.length).toBe(1);
  });
  
});