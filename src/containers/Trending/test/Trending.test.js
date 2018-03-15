import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TrendingContainer from '..';
import { createMockStore } from 'redux-test-utils';

const props = {
  isFavorite: true,
  gif: {
    title:'title',
    images: {
      downsized_large: {
        url: 'test'
      }
    }
  },
  searchGif: jest.fn(),
  setFavorite: jest.fn(),
  history: {
    goBack: jest.fn()
  },
  match: {
    params: {
      id: 1
    }
  },
  location: {
    pathname: '/test'
  }
}

describe('TrendingContainer', () => {
  it('should render correctly', () => {
    const output = shallow(
      <TrendingContainer.WrappedComponent {...props}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should be defined', () => {
   expect(TrendingContainer).toBeDefined();
  });
  it("should render successfully ", () => {
  const testState = {
    gifs: [],
    favoriteGifs: []
  };
  const store = createMockStore(testState)
  const component = shallow(<TrendingContainer store={store} />);
  expect(component).toBeDefined();
  });
});
