import { Trending } from '../../components/Trending'
import { Title, Gifs, Gif } from '../../components/Trending/trending.style'
import { shallow, simulate } from 'enzyme'
import 'jest-styled-components'
import React from 'react';
import Store from '../../store'

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
    trending: items
}

describe('Trending', () => {
    
    test('Title styled', () => {
        const component = shallow(<Title > Hola </Title>)
        expect(component).toHaveStyleRule('font-size', '2rem')
        expect(component).toHaveStyleRule('font-family', 'sans-serif')
        expect(component).toHaveStyleRule('text-align', 'center')
    })

    test('Gifs styled', () => {
        const component = shallow(<Gifs />)
        expect(component).toHaveStyleRule('display', 'grid')
        expect(component).toHaveStyleRule('grid-gap', '0.5rem')
        expect(component).toHaveStyleRule('justify-content', 'center')
        expect(component).toHaveStyleRule('grid-template-columns', 'repeat(auto-fill,12rem)')
        expect(component).toHaveStyleRule('grid-template-rows', 'repeat(auto-fill,12rem)')
    })

    test('Trending', () => {
        const component = shallow(<Trending {...props} />)
        expect(component).toMatchSnapshot();
    })

    test('Trending Gif', () => {
        const component = shallow(<Trending {...props} />)
        expect(component.find(Gif)).toHaveLength(2);
    })

    test('Trending Gis', () => {
        const component = shallow(<Trending {...props} />)
        expect(component.find(Gifs)).toHaveLength(1);
    })

    test('Trending Title', () => {
        const component = shallow(<Trending {...props} />)
        expect(component.find(Title)).toHaveLength(1);
    })

    test('Trending Title', () => {
        const component = shallow(<Trending {...props} />)
        expect(props.getTrending).toHaveBeenCalled();
    })

})