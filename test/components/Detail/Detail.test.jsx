import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { MemoryRouter } from 'react-router'
import { WrapperProvider } from '../../mocks/redux'

import { Detail } from '../../../src/components'

const props = {
  giph: {
    images: {
      original: {
        url: 'someUrl'
      }
    },
    title: 'this is a gif',
    id: '123'
  },
  initialSetup: jest.fn()
}

const match = {
  params: {
    id: props.id
  }
}

describe('Detail', () => {
  it('renders correctly when giph is not null', () => {
    const wrapper = shallow(
      <Detail giph={props.giph} initialSetup={props.initialSetup} match={match} />
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when giph is null', () => {
    const wrapper = shallow(
      <Detail initialSetup={props.initialSetup} match={match} />
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('calls initialSetup when mounting', () => {
    mount(
      <WrapperProvider>
        <MemoryRouter>
          <Detail giph={props.giph} initialSetup={props.initialSetup} match={match} />
        </MemoryRouter>
      </WrapperProvider>

    )

    expect(props.initialSetup).toHaveBeenCalled()
  })
})
