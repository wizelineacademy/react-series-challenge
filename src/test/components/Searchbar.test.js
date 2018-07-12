import React from 'react';
import Searchbar from '../../components/Searchbar'
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

test('Searchbar snapshot', () => {
  const component = shallow(
    <Searchbar/>
  );
  expect(toJson(component)).toMatchSnapshot();
})

describe('Search actions', () => {
  it('handleKeyPress', () => {
    const onHandleKeyPress = jest.fn();
    const component = mount(
      <Searchbar
        handleKeyPress={onHandleKeyPress}
      />
    )
    const input = component.find('input')
    input.simulate('keyPress', {key: 's'});
    expect(onHandleKeyPress).toHaveBeenCalled()
  })
})

