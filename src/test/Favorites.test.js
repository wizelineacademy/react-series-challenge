import React from 'react';
import { shallow, mount } from 'enzyme';
import { Favorites, handleSearch } from 'components/favorites/Favorites'
import FavoritesConnect from 'components/favorites/Favorites'
import configureStore from 'redux-mock-store'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Favorites/>)
})

describe('Favorites', () => {
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  test('renders properly with empty favorites', () => {
    wrapper = shallow(<Favorites favorite={{}}/>)
    expect(wrapper).toMatchSnapshot()
  });
  
  test('renders properly with favorites', () => {
    wrapper = shallow(<Favorites favorite={{'id': {}}}/>)
    expect(wrapper).toMatchSnapshot()
  });
  
  test('renders properly with favorites and search', () => {
    wrapper = shallow(<Favorites favorite={{'id': {}}}/>)
    wrapper.setState({
      searchValue: 'TEST'
    });
    expect(wrapper).toMatchSnapshot();
  });
  
  test('renders properly with connect', () => {
    const initialState = {
      favorite: {}
    };
    const mockStore = configureStore();
    let store;
    store = mockStore(initialState)
    let wrapper = shallow(<FavoritesConnect store={store}/>)
    expect(JSON.stringify(wrapper.props().favorite)).toBe(JSON.stringify({}));
  });

  test('handleSearch should call setState', () => {
    wrapper = mount(<Favorites/>)
    wrapper.instance().setState = jest.fn();
    wrapper.instance().handleSearch({target:{value: 'TEST'}})
    expect(wrapper.instance().setState).toHaveBeenCalled();
  })
});
