import { Home } from '../../components/Home'
import { shallow, simulate } from 'enzyme'
import 'jest-styled-components'
import React from 'react'

const items = [{
    src: 'https://media3.giphy.com/media/UdtJqVG2gCchy/giphy-downsized.gif',
    alt: 'BMO',
    onClick: jest.fn(),
    favorite: false,
    images: {
        downsized: {
            url: 'https://media3.giphy.com/media/UdtJqVG2gCchy/giphy-downsized.gif'
        }
    }

}, {
    src: 'https://media3.giphy.com/media/UdtJqVG2gCchy/giphy-downsized.gif',
    alt: 'BMO',
    onClick: jest.fn(),
    favorite: false,
    images: {
        downsized: {
            url: 'https://media3.giphy.com/media/UdtJqVG2gCchy/giphy-downsized.gif'
        }
    }
}]
const props = {
    getTrending: jest.fn(),
    favorites: items,
    search: items
}

describe('Home', () => {

    test('Home snapshot', () => {
        const component = shallow(<Home {...props} />)
        expect(component).toMatchSnapshot()
    })
})
