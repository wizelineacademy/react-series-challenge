import React from 'react';
import { shallow } from 'enzyme';
import ListGiphy from '../../src/giphy/components/list-giphy';

describe('ListGiphy component', () => {
  test('should shallow correctly', () => {
      expect(shallow(
        <ListGiphy />
      )).toMatchSnapshot() 
  })
  // test('should mount correctly', () => {
  //     expect(render(
  //       <ListGiphy />
  //     )).toMatchSnapshot() 
  // })
  // test('should render correctly', () => {
  //     expect(mount(
  //       <ListGiphy />
  //     )).toMatchSnapshot() 
  // })
})