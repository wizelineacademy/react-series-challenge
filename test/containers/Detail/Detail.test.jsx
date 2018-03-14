import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { WrapperProvider } from '../../mocks/redux'

import { Detail } from '../../../src/containers'

const match = {
  params: {
    id: '123'
  }
}

describe('Home', () => {
  it('calls initialSetup', () => {
    mount(
      <WrapperProvider>
        <MemoryRouter>
          <Detail match={match} />
        </MemoryRouter>
      </WrapperProvider>
    )
  })
})
