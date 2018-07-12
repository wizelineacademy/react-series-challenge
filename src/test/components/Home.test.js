import React from 'react';
import Home from '../../components/Home'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

const middlewares = []
const mockStore = configureStore(middlewares)

test('Home snapshot', () => {
  const initialState = {
    content:{
      data: {data: {title:'title1', images:{original:{webp:'srcImage'}}}},
      favorites:{}
    }
  }
  const store = mockStore(initialState)
  const component = mount(
    <Home store={store}/>,
  );
  expect(toJson(component)).toMatchSnapshot();
})


