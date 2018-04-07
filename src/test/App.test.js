import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom';
import store from '../store';
import App from '../components/containers/App';
import Home from '../components/containers/Home';
import Favorites from '../components/containers/Favorites';
import GifDetail from '../components/containers/GifDetail';
import NotFound from '../components/containers/NotFound';
import '../style/global';

describe('App', () => {
  it('should render correctly', () => {
    const output = shallow(
      <App />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Router and Redux provider', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('Move router to favorites', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router initialEntries={[ '/favorites' ]}>
          <App />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Favorites)).toHaveLength(1);
  });

  it('Move router to Gif Detail View', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router initialEntries={[ '/gifs/ksq4d8rRY1K2kYPt0B' ]}>
          <App />
        </Router>
      </Provider>
    );
    expect(wrapper.find(GifDetail)).toHaveLength(1);
  });

  it('Move router to non-existent route and its showed the not found page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router initialEntries={[ '/another_none-existent_route' ]}>
          <App />
        </Router>
      </Provider>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
    expect(wrapper.find(Favorites)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(0);
  });
});
