import React from 'react';
import {render} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

function mockItem() {
	// return mocked object
}
describe('Test ToDoItem Component', () => {
	it('renders an `.icon-search`', () => {
        const wrapper = render(<BrowserRouter><App /></BrowserRouter>);
        expect(wrapper.find('.search-icon').length).toBe(1);
    });
});
