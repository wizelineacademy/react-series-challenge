import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchBar from '..';
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
  searchGifs: jest.fn(),
  setFavorite: jest.fn(),
  history: {
    push: jest.fn()
  },
  location: {
    pathname: '/'
  },
  match: {
    params: {
      id: 1
    }
  }
}

describe('SearchBar', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SearchBar.WrappedComponent {...props} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should be defined', () => {
   expect(SearchBar).toBeDefined();
  });
  it('should submit when no favorite', () => {
    const output = shallow(
      <SearchBar.WrappedComponent {...props} />
    );
    output.find('form').simulate('submit', {
      preventDefault: () => {}
    })
    expect(props.searchGifs).toHaveBeenCalled();
    expect(props.history.push).toHaveBeenCalled();
  })
  it('should submit when favorite', () => {
    const favoriteLocation = {
      pathname: '/favorites'
    }
    const output = shallow(
      <SearchBar.WrappedComponent {...props} location={favoriteLocation} />
    );
    output.find('form').simulate('submit', {
      preventDefault: () => {}
    })
    expect(props.searchGifs).toHaveBeenCalled();
    expect(props.history.push).toHaveBeenCalled();
  })
});
