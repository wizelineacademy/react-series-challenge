import React from 'react';
import { shallow } from 'enzyme';
import { Header, LogoImage, LogoText, NavLinks, NavTab, SearchInput } from './NavBar.styled';
import NavBar from './NavBar';

describe('NavBar', () => {
  test('Header', () => {
    const headerComponent = shallow(<Header />);
    expect(headerComponent).toMatchSnapshot();
  });

  test('LogoImage', () => {
    const logoImageComponent = shallow(<LogoImage />);
    expect(logoImageComponent).toMatchSnapshot();
  });

  test('LogoText', () => {
    const logoTextComponent = shallow(<LogoText />);
    expect(logoTextComponent).toMatchSnapshot();
  });

  test('NavLinks', () => {
    const navLinksComponent = shallow(<NavLinks />);
    expect(navLinksComponent).toMatchSnapshot();
  });

  test('NavTab', () => {
    const navTabComponent = shallow(<NavTab to="/" />);
    expect(navTabComponent).toMatchSnapshot();
  });

  test('SearchInput', () => {
    const searchInputComponent = shallow(<SearchInput />);
    expect(searchInputComponent).toMatchSnapshot();
  });

  test("NavBar", () => {
    const mockOnSearch = jest.fn();
    const searchTerm = 'react';
    const navBarComponent = shallow(<NavBar onSearch={mockOnSearch} />);

    navBarComponent.setState({ search: searchTerm });
    navBarComponent.find(SearchInput).simulate('change', { target: { value: searchTerm } })
    navBarComponent.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(navBarComponent).toMatchSnapshot();
    expect(mockOnSearch).toHaveBeenCalledWith(searchTerm);
  })
})