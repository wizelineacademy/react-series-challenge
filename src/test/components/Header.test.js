import React from 'react';
import Header from '../components/Header'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'

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
    <BrowserRouter>
      <Header store={store}/>
    </BrowserRouter>,
  );
  let componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
})


