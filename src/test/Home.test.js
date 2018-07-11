import React from 'react';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import Home from 'components/home/Home'

const initialState = {}; 
const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
  store = mockStore(initialState)
  wrapper = shallow(<Home store={store}/>)
})

describe('Home', () => {
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
