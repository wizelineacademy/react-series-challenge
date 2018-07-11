import React from 'react';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import Favorites from 'components/favorites/Favorites'

const initialState = {}; 
const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
  store = mockStore(initialState)
  wrapper = shallow(<Favorites store={store}/>)
})

describe('Favorites', () => {
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
