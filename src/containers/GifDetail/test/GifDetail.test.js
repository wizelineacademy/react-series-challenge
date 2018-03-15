import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GifDetailContainer from '..';
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
  }
}

describe('GifDetailContainer', () => {
  it('should render correctly', () => {
    const output = shallow(
      <GifDetailContainer.WrappedComponent {...props}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should be defined', () => {
   expect(GifDetailContainer).toBeDefined();
  });
  it("should render successfully ", () => {
  const testState = {
    activeGif: {},
    favoriteGifs: []
  };
  const store = createMockStore(testState)
  const component = shallow(<GifDetailContainer store={store} />);
  expect(component).toBeDefined();
  });
});
