import React from 'react';
import Header from '../../components/Header'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

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
  const component = shallow(
    <BrowserRouter>
      <Header store={store}/>
    </BrowserRouter>,
  )
  expect(toJson(component)).toMatchSnapshot();
})


