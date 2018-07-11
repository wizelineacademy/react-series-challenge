import React from 'react';
import Searchbar from '../components/Searchbar'
import renderer from 'react-test-renderer';

test('Searchbar snapshot', () => {
  const component = renderer.create(
    <Searchbar/>
  );
  let componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
})


