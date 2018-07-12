import React from 'react';
import Favorites from '../../components/Favorites'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
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
  const component = mount(
    <Favorites store={store}/>,
  );
  expect(toJson(component)).toMatchSnapshot();
})

describe('Search actions', () => {
  it('handleKeyPress', () => {
    const initialState = {
      content:{
        data: {data: {tite:'title1', images:{original:{webp:'srcImage'}}}},
        favorites:{}
      }
    }
    const onHandleKeyPress = jest.fn();
  const store = mockStore(initialState)
    const component = shallow(
      <Favorites store={store}/>,
    )

    component.dive().instance().toogleFavorite({}, true)
  })
})

