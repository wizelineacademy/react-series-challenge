import React from 'react'
import { shallow } from 'enzyme'
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


// describe('test', () => {
//   it('will work', () => {
//     const onClick = (item, isFav) => {}
//     const component = shallow(
//       <Item
//         item={item}
//         onClick={onClick}
//         onClickFav={onClick}
//       />
//     )
//     expect(component.text()).toBe('hola')
//   })
// })

