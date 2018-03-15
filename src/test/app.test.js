import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import gifData from './data/gifTestData'
import configureStore from 'redux-mock-store'
import { shallowToJson } from 'enzyme-to-json';

const mockStore = configureStore()
const initialState = {
  favoriteGifs: [
    { id: gifData.id }
  ]
}

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App store={mockStore(initialState)} />)
    // expect(wrapper).toMatchSnapshot();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
})
