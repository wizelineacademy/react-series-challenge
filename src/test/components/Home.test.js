import React from 'react';
import Home from '../components/Home'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'

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
  const component = renderer.create(
    <Home store={store}/>,
  );
  let home = component.toJSON();
  expect(home).toMatchSnapshot();
})


