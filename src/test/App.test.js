import { shallow } from 'enzyme'
import { Link, Main, Layout, Navigation } from '../App.style'
import { Route } from 'react-router-dom'
import routes from '../routes'
import React from 'react';
import App from '../App';

describe('App', () => {
    let snap

    beforeEach(() => {
        snap = shallow(
            <App routes={routes} />
        )
    })

    test('Should match snapshot', () => {
        expect(snap).toMatchSnapshot()
    })

    test('Should contain N links as N routes', () => {
        expect(snap.find(Link)).toHaveLength(routes.length)
    })

    test('Should not contain links', () => {
        snap.setProps({ routes: [] })
        expect(snap.find(Link)).toHaveLength(0)
    })

    test('Should contain N routes as N routes', () => {
        expect(snap.find(Route)).toHaveLength(routes.length)
    })

    test('Should not contain routes', () => {
        snap.setProps({ routes: [] })
        expect(snap.find(Route)).toHaveLength(0)
    })

    test('Shoud contain the styled components', () => {
        expect(snap.containsAllMatchingElements([Main, Layout, Navigation])).toBeTruthy()
    })

})


