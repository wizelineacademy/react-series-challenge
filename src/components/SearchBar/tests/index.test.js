import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../App';
import SearchBar from '../index';

describe('SearchBar', () => {
  it('should render correctly', () => {
    const props = {
      onSearch: jest.fn(),
    };
    const component = shallow(<SearchBar {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should call onSearch prop function when submitting search-form', () => {
    const onSearchMock = jest.fn();
    const props = {
      onSearch: onSearchMock,
    };
    const component = mount(
      <ThemeProvider theme={theme}>
        <SearchBar {...props} />
      </ThemeProvider>
    );
    //expect(component.find('#search-form')).toHaveLength(1);
    component
      .find('#search-form')
      .first()
      .simulate('submit', {
        preventDefault() {},
      });
    expect(onSearchMock.mock.calls.length).toBe(1);
  });
});
