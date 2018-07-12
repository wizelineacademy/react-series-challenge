import { Gif } from '../../components/Gif'
import { shallow, simulate } from 'enzyme'
import React from 'react';

describe('Gif', () => {
    let testValue = false;
    const gif = {
        src: 'https://media3.giphy.com/media/UdtJqVG2gCchy/giphy-downsized.gif',
        alt: 'BMO',
        onClick: () => { testValue = true },
        favorite: false
    }


    test('Should match with a snapshot', () => {
        const component = shallow(<Gif {...gif} />)
        expect(component).toMatchSnapshot();
    })


    test('Should not have a favorite class', () => {
        const component = shallow(<Gif {...gif} />)
        expect(component).toMatchSnapshot();
        expect(component.hasClass('favorite')).toBeFalsy()
    })


    test('Should match with a snapshot', () => {
        const liked = Object.assign({}, gif, { favorite: true })
        const component = shallow(<Gif {...liked}  />)
        expect(component).toMatchSnapshot();
    })

    test('Should have a favorite class', () => {
        const liked = Object.assign({}, gif, { favorite: true })
        const component = shallow(<Gif {...liked} />)
        expect(component.hasClass('favorite')).toBeTruthy()
    })

    test('Should execute the click', () => {
        const liked = Object.assign({}, gif, { favorite: true })
        const component = shallow(<Gif {...liked} />)
        component.simulate('click')
        expect(testValue).toBeTruthy()
        testValue = false;
    })
    
});