import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Grid } from '../../../src/components'

const props = {
  giphies: [
    {
      id: '123',
      images: {},
      title: 'a title'
    },
    {
      id: '124',
      images: {},
      title: 'a title'
    }
  ]
}

describe('Grid', () => {
  it('renders when no giphies', () => {
    const wrapper = shallow(
      <Grid giphies={[]} />
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders with giphies', () => {
    const wrapper = shallow(
      <Grid {...props} />
    )

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
