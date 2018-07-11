import React from 'react';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import Gif from 'components/gif/Gif'

const initialState = {}; 
const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
  store = mockStore(initialState)
  wrapper = shallow(<Gif store={store}/>)
})

describe('Gif', () => {
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  });
  test('receives title prop', () => {
    wrapper = shallow(
      <Gif store={store} title={'Test Title'} />
    );
    expect(wrapper.props().title).toBe('Test Title');
  })
  test('receives src prop', () => {
    wrapper = shallow(
      <Gif store={store} src={'TEST URL'} />
    );
    expect(wrapper.props().src).toBe('TEST URL');
  })
});
