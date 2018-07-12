import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import TrendingContainer from './TrendingContainer';

jest.mock('./Trending', () => () => (<div>a</div>));

describe('TrendingContainer component', () => {
  let initialState = null;
  let store = null;

  beforeEach(() => {
    initialState = {
      trendingGifs: {},
      favoriteGifs: {},
      filterText: { trendingFilter: '' },
      fetchTrending: jest.fn(),
      searchTrending: jest.fn(),
      fetchFavorite: jest.fn(),
    };
    store = configureStore()(initialState);
  });

  it('renders the component whe it is provided with a store', () => {
    const wrapper = shallow(<TrendingContainer store={store} />);
    expect(wrapper.length).toEqual(1);
  });

  it('set props according to initial state', () => {
    const wrapper = shallow(<TrendingContainer store={store} />);
    expect(wrapper.prop('trendingGifs')).toBeTruthy();
    expect(wrapper.prop('favoriteGifs')).toBeTruthy();
    expect(wrapper.prop('filterTrendingText')).toEqual('');
    expect(wrapper.prop('fetchTrending')).toBeTruthy();
    expect(wrapper.prop('searchTrending')).toBeTruthy();
    expect(wrapper.prop('fetchFavorite')).toBeTruthy();
  });
});
