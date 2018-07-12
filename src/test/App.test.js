import React from 'react';
import App from '../App'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

test('App snapshot', () => {
  const initialState = {
    content:{
      data: {data: {title:'title1', images:{original:{webp:'srcImage'}}}},
      favorites:{}
    }
  }
  const store = mockStore(initialState)
  const component = renderer.create(
    <App store={store}/>,
  );
  let app = component.toJSON();
  expect(app).toMatchSnapshot();
})



