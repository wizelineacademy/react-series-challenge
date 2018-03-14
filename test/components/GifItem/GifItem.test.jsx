import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { GifItem } from '../../../src/components'
import Icon from 'react-icons-kit'

const props = {
  alt: 'some alt text',
  favorites: ['123'],
  id: '123',
  imageUrl: 'someUrl.com',
  isDetail: false,
  onFavoriteClick: jest.fn()
}

describe('GifItem', () => {
  it('renders correctly when detail is false', () => {
    const wrapper = shallow(
      <GifItem {...props}/>
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()

  })

  it('renders correctly when detail is true', () => {
    const wrapper = shallow(
      <GifItem {...Object.assign(props, {isDetail: true})} />
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when isFavorite is false', () => {
    const wrapper = shallow(
      <GifItem {...Object.assign(props, {isDetail: true, id: '12345'})} />
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('calls onFavoriteClick when clicked', () => {
    const wrapper = shallow(<GifItem {...props}/>)

    wrapper.find(Icon).simulate('click')

    expect(props.onFavoriteClick).toHaveBeenCalled()
  })

})
