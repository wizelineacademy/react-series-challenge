import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { MemoryRouter } from 'react-router'
import { WrapperProvider } from '../../mocks/redux'

import { Home } from '../../../src/components'

const props = {
  giphies: [
    {
      id: '123',
      title: 'First title',
      images: {
        fixed_height: {
          url: 'someUrl.com'
        }
      }
    },
    {
      id: '1234',
      title: 'Second Title',
      images: {
        fixed_height: {
          url: 'someOtherUrl.com'
        }
      }
    }
  ],
  initialSetup: jest.fn(),
  keywordFilter: '',
  onSearchChange: jest.fn(),
  onSearchSubmit: jest.fn(),
  searchValue: ''
}

describe('Home', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Home {...props}/>
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('calls initialSetup function when rendered', () => {
    mount(
      <WrapperProvider>
        <MemoryRouter>
          <Home {...props} />
        </MemoryRouter>
      </WrapperProvider>
    )

    expect(props.initialSetup).toHaveBeenCalled()
  })
})
