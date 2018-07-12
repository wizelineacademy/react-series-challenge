import React from 'react'
import { shallow, mount } from 'enzyme'
import Item from '../../components/Item'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'


const item= {
  title:'title1', images:{original:{webp:'srcImage'}}
}
test('Home snapshot', () => {
  const onClick = (item, isFav) => {}
  const component = shallow(
    <Item
      item={item}
      onClick={onClick}
      onClickFav={onClick}
    />
  )
  expect(toJson(component)).toMatchSnapshot();
})


describe('Test buttons', () => {
  it('test onClick', () => {
    const onButtonClick = jest.fn();
    const component = mount(
      <Item
        item={item}
        onClick={onButtonClick}
        onClickFav={onButtonClick}
      />
    )
    const button = component.find('img').first()
    button.simulate('click');
    expect(onButtonClick).toHaveBeenCalled()
  })
  it('test onClick', () => {
    const onButtonClick = jest.fn();
    const component = mount(
      <Item
        item={item}
        onClick={onButtonClick}
        isFav={true}
        onClickFav={onButtonClick}
      />
    )
    const button = component.find('img').last()
    button.simulate('click');
    expect(onButtonClick).toHaveBeenCalled()
  })
})

