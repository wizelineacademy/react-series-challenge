import ErrorBoundary from '../ErrorBoundary';
import React from 'react';
import { shallow } from 'enzyme';

describe('ErrorBoundary', () => {
    
    test('should render', () => {
        const wrapper = shallow(<ErrorBoundary />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should return children since no errors', () => {
        const wrapper = shallow(<ErrorBoundary />);
        wrapper.setState({ hasErrors: true });
        expect(wrapper.contains(<h1>Something went wrong. Report this problem!</h1>)).toBe(true);
    })

    test('should return children since errors', () => {
        const wrapper = shallow(<ErrorBoundary />);
        wrapper.setState({ hasErrors: false });
        expect(wrapper.contains(<h1>Something went wrong. Report this problem!</h1>)).toBe(false);
    })
});