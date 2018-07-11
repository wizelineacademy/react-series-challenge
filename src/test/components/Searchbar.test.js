import React from 'react';
import Searchbar from '../../components/Searchbar'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

test('Searchbar snapshot', () => {
  const component = shallow(
    <Searchbar/>
  );
  expect(toJson(component)).toMatchSnapshot();
})


