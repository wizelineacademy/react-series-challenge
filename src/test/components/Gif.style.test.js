import React from 'react'
import renderer from 'react-test-renderer'
import { Wraper } from "../../components/Gif.style"

test('Styled gif works', () => {
  const tree = renderer.create(<Wraper />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('width', '200px')
})