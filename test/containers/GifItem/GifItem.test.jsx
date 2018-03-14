import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Icon from 'react-icons-kit'
import { WrapperProvider } from '../../mocks/redux'

import GifItem from '../../../src/containers/GifItem'

const props = {
  alt: 'some alt text',
  favorites: ['123'],
  id: '123',
  imageUrl: 'someUrl.com',
  isDetail: false,
  onFavoriteClick: jest.fn()
}

describe('GifItem', () => {
  it('calls onFavoriteClick', () => {
    const wrapper = mount(
      <WrapperProvider>
        <MemoryRouter>
          <GifItem {...props} />
        </MemoryRouter>
      </WrapperProvider>
    )
    wrapper.find(Icon).simulate('click')

  })
})
