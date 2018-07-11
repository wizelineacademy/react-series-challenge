import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

describe('ListGiphy component', () => {
  test('should shallow correctly', () => {
      expect(shallow(
        <App />
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