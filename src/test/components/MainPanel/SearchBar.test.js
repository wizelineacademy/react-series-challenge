import React from 'react';
import { shallow, mount } from "enzyme";

import SearchBar from "../../../components/MainPanel/SearchBar";
import StyledSearchBar from "../../../components/styled/SearchBar.styled";

describe('SearchBar', () => {

  it('SearchBar should match snapshot', () => {
    const mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        searchQuery: 'sq'
      })),
      subscribe: jest.fn()
    }
    expect(shallow(<SearchBar store={mockStore} />)).toMatchSnapshot();
  });

  it('SearchBar should dispatch an action on change', () => {
    const mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        searchQuery: 'sq'
      })),
      subscribe: jest.fn()
    }
    const comp = mount(<SearchBar store={mockStore} />);
    comp.simulate('change');
    expect(mockStore.dispatch).toHaveBeenCalled();
  });

  it('props.searchQuery should match state.searchQuery when SearchBar is mounted', () => {
    const mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        searchQuery: 'sq'
      })),
      subscribe: jest.fn()
    }
    const comp = mount(<SearchBar store={mockStore} />);
    expect(comp.props().store.getState().searchQuery).toBe('sq');
  });

});
