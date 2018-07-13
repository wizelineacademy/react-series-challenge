import React from 'react';
import { shallow, render, mount } from "enzyme";

import Star from "../../../components/MainPanel/Star";
import store from '../../../store';
import StyledStar from '../../../components/styled/Star.styled';
import starFav from '../../../components/MainPanel/favorite.png';
import starNotFav from '../../../components/MainPanel/addToFavorites.png';

describe('Star', () => {

  it('Favorite star matches snapshot', () => {
    const comp = shallow(<Star store={store} active />)
    expect(comp).toMatchSnapshot();
  });

  it('Favorite star sends props to children', () => {
    const comp = mount(<Star store={store} active />);
    expect(comp.find(StyledStar).props().src).toBe(starFav);
  });

  it('Add to favorites star matches snapshot', () => {
    const comp = shallow(<Star store={store} active={false} />);
    expect(comp).toMatchSnapshot();
  });

  it('Add to favorites star sends props to children', () => {
    const comp = mount(<Star store={store} active={false} />);
    expect(comp.find(StyledStar).props().src).toBe(starNotFav);
  });

  it('test click on star', () => {
    const mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn()
    }
    const comp = mount(<Star store={mockStore} active={false} />)
    comp.simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalled();
  });

});