import App from '../App';
import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, NavbarContainer, NavbarLi, NavbarLink, AppBody, } from '../styles/App.style';
import ErrorBoundary from '../components/ErrorBoundary';
import { Switch } from 'react-router-dom';

describe('App', () => {
  let Wrapper;

  beforeEach(() => {
    Wrapper = shallow(<App />);
  });

  test('Should match snapshot', () => {
      expect(Wrapper).toMatchSnapshot();
  });

  test('Should render Navbar', () => {
    expect(Wrapper.find(Navbar)).toHaveLength(1);
  });

  test('Should render NavbarContainer', () => {
    expect(Wrapper.find(NavbarContainer)).toHaveLength(1);
  });

  test('Should render NavbarLi', () => {
    expect(Wrapper.find(NavbarLi)).toHaveLength(2);
  });

  test('Should render NavbarLink', () => {
    expect(Wrapper.find(NavbarLink)).toHaveLength(0);
  });

  test('Should render AppBody', () => {
    expect(Wrapper.find(AppBody)).toHaveLength(1);
  });

  test('Should render ErrorBoundary', () => {
    expect(Wrapper.find(ErrorBoundary)).toHaveLength(1);
  });

  test('Should render Switch', () => {
    expect(Wrapper.find(Switch)).toHaveLength(1);
  });
});