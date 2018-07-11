import React from 'react';
import Content from '../../components/Content'
import renderer from 'react-test-renderer';

test('Home snapshot', () => {
  const data= {
          data1: {
            title:'title1', images:{original:{webp:'srcImage'}}
          }}
  const favorites = {}
  const component = renderer.create(
    <Content
      data={data}
      favorites= {favorites}
    />
  );
  let componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
})

