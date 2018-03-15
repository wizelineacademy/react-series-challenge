import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchContainer from '..';
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
    pathname: 'test'
  }
}

describe('SearchContainer', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SearchContainer.WrappedComponent {...props}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should be defined', () => {
   expect(SearchContainer).toBeDefined();
  });
  it("should render successfully ", () => {
  const testState = {
    gifs: [],
    favoriteGifs: []
  };
  const store = createMockStore(testState)
  const component = shallow(<SearchContainer store={store} />);
  expect(component).toBeDefined();
  });
});
