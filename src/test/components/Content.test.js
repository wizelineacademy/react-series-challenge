import React from 'react';
import Content from '../../components/Content'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import 'jest-styled-components'

test('Home snapshot', () => {
  const data= {
          data1: {
            title:'title1', images:{original:{webp:'srcImage'}}
          }}
  const favorites = {}
  const component = shallow(
    <Content
      data={data}
      favorites= {favorites}
    />
  );
  expect(toJson(component)).toMatchSnapshot();
})

