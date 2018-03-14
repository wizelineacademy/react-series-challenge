import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Card } from '../../../src/components'

const props = {
  title: 'This is a gif',
  id: '123',
  images: {
    fixed_height: {
      url: 'someUrl.com'
    }
  }
}

const passedProps = {
  alt: 'This is a gif',
  id: '123',
  imageUrl: 'someUrl.com'
}

describe('Card', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Card images={props.images} title={props.title} id={props.id}/>
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('should pass props to children', () => {
    const wrapper = shallow(
      <Card images={props.images} title={props.title} id={props.id}/>
    )

    expect(wrapper.props().children.props).toEqual(passedProps)
  })
})
