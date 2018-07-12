import React from 'react';
import App from '../App';
import { mount, } from 'enzyme';
import renderer from 'react-test-renderer';
import { Navbar, NavbarContainer, NavbarLi, NavbarLink, AppBody, } from '../styles/App.style';
import ErrorBoundary from '../components/ErrorBoundary';
import { MemoryRouter, Switch, } from 'react-router-dom';
import configureStore from 'redux-mock-store';

const initialState = {
  gifsTrending: {
    gifs: [],
    loading: true,
  },
  gifsFavorites: {
    favorites: [],
    textFilter: '',
  },
};

const mockStore = configureStore();
const store = mockStore(initialState);
describe('App test', () => {
  let Wrapper;

  beforeEach(() => {
    Wrapper = mount(<MemoryRouter><App store={store} /></MemoryRouter>);
  });

  test('Should match snapshot', () => {
    const appComponent = renderer.create(<MemoryRouter><App store={store} /></MemoryRouter>).toJSON();
    expect(appComponent).toMatchSnapshot();
  });

  test('Should render Navbar', () => {
    expect(Wrapper.find(Navbar).length).toEqual(1);
  });

  test('Should render NavbarContainer', () => {
    expect(Wrapper.find(NavbarContainer).length).toEqual(1);
  });

  test('Should render NavbarLi', () => {
    expect(Wrapper.find(NavbarLi).length).toEqual(2);
  });

  test('Should render NavbarLink', () => {
    expect(Wrapper.find(NavbarLink).length).toEqual(2);
  });

  test('Should render AppBody', () => {
    expect(Wrapper.find(AppBody).length).toEqual(1);
  });

  test('Should render ErrorBoundary', () => {
    expect(Wrapper.find(ErrorBoundary).length).toEqual(1);
  });
});