/**
 * @jest-environment node
 */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchContainer from '..';

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
});
