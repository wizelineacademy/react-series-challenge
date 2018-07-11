import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonTextStyled } from "../../components/Navbar.style"

test('Styled navbar works', () => {
  const tree = renderer.create(<ButtonTextStyled />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('color', 'white')
})