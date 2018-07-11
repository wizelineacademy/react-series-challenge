import React from 'react';
import Item from '../components/Item'
import renderer from 'react-test-renderer';

test('Home snapshot', () => {
  const item= {
    title:'title1', images:{original:{webp:'srcImage'}}
  }

  const onClick = (item, isFav) => {}
  const component = renderer.create(
    <Item
      item={item}
      onClick={onClick}
      onClickFav={onClick}
    />
  );
  let componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
})

