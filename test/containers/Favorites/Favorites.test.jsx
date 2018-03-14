import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { WrapperProvider } from '../../mocks/redux'

import { Favorites } from '../../../src/containers'

describe('Favorites', () => {
  it('calls onSearchChange', () => {
    const wrapper = mount(
      <WrapperProvider>
        <MemoryRouter>
          <Favorites />
        </MemoryRouter>
      </WrapperProvider>
    )

    wrapper.find('input').simulate('change', {target: {value: 'something'}})
  })

  it('submits a query with value', () => {
    const wrapper = mount(
      <WrapperProvider>
        <MemoryRouter>
          <Favorites />
        </MemoryRouter>
      </WrapperProvider>
    )

    wrapper.find('button').simulate('submit', {target: {search:{value: 'something'}}})
  })

  it('submits a query without value', () => {
    const wrapper = mount(
      <WrapperProvider>
        <MemoryRouter>
          <Favorites />
        </MemoryRouter>
      </WrapperProvider>
    )

    wrapper.find('button').simulate('submit', {target: {search:{value: ''}}})
  })
})
