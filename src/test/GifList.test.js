import React from 'react';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import GifList from 'components/gifList/GifList'

const initialState = {}; 
const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
  store = mockStore(initialState)
  wrapper = shallow(<GifList store={store}/>)
})

describe('GifList', () => {
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
