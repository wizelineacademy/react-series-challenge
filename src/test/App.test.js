import App from '../App';
import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import GifPage from '../components/GifPage/GifPage'
import GifFavorite from '../components/GifFavorite/GifFavorite'
import {StyledLi, StyledNavLink} from '../App.styled'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  test('should render', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
  });

  test('should set the routes ', () => {
    expect(
      wrapper.contains(<Route path = "/home" exact component = {GifPage} />)
    ).toBe(true);
  });

  test('should set the routess ', () => {
    expect(
      wrapper.contains(<Route path = "/favorite" exact component = {GifFavorite} />)
    ).toBe(true);
  });

  test('should set nav links ', () => {
    expect(
      wrapper.contains(<StyledLi><StyledNavLink 
        to = "/favorite"
        activeClassName = "act"
        exact>
        Favorites</StyledNavLink></StyledLi>)
    ).toBe(true);
  });
  
})
