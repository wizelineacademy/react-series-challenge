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
  const onClick = (item, isFav) => {}
  it('test onClick', () => {
    const onButtonClick = jest.fn();
    const component = mount(
      <Item
        item={item}
        onClick={onButtonClick}
        onClickFav={onClick}
      />
    )
    const button = component.find('#fav-button').first();
    console.log('test test ', button.debug())

    button.simulate('click', {target: {id: 'fav-button'}});
    // expect(onButtonClick.calledOnce).toBeTruthy()
    expect(onButtonClick).toHaveBeenCalled()
  })
})

