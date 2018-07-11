import React from 'react';
import Favorites from '../components/Favorites'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

test('Home snapshot', () => {
  const initialState = {
    content:{
      data: {data: {tite:'title1', images:{original:{webp:'srcImage'}}}},
      favorites:{}
    }
  }
  const store = mockStore(initialState)
  const component = renderer.create(
    <Favorites store={store}/>,
  );
  let componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
})

