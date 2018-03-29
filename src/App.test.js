import React from 'react';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

describe('Test ToDoItem Component', () => {
	it('render 1 App component', () => {
        const wrapper = shallow(<BrowserRouter><App /></BrowserRouter>);
        expect(wrapper).toHaveLength(1);
    });
});
