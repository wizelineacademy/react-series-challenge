import React from 'react';
import { shallow } from 'enzyme';
import { HomeContainer } from '../index';

describe('HomeContainer', () => {
  let props = {};
  const setPathMock = jest.fn();
  const loadTrendingGifsMock = jest.fn();
  const searchGifsMock = jest.fn();
  beforeEach(() => {
    props = {
      match: { path: '/' },
      setPath: setPathMock,
      loadTrendingGifs: loadTrendingGifsMock,
      searchGifs: searchGifsMock,
      gifs: [],
      isLoading: false,
    };
  });

  it('should render correctly the HomeContainer', () => {
    const component = shallow(<HomeContainer {...props} />);
    expect(component).toMatchSnapshot();
  });
});
