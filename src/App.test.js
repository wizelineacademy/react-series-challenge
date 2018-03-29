import React from 'react';
import {
	Route,
	Redirect,
	NavLink,
	Switch,
	MemoryRouter
} from 'react-router-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SearchGif from './components/SearchGif/SearchGif';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Border, Title, Header } from './style/style';
import App from './App';

describe('App', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});
	it('should be match Snapshot', () => {
		const renderedValue = renderer
			.create(
				<MemoryRouter>
					<App />
				</MemoryRouter>
			)
			.toJSON();
		expect(renderedValue).toMatchSnapshot();
	});
	it('should render a Header', () => {
		expect(wrapper.find(Header)).toHaveLength(1);
	});
	it('should render a Title', () => {
		expect(wrapper.find(Title)).toHaveLength(1);
	});
	it('should render two NavLinks', () => {
		expect(wrapper.find(NavLink)).toHaveLength(2);
	});
	it('should render a SearchGif', () => {
		expect(wrapper.find(SearchGif)).toHaveLength(1);
	});
	it('should render a ErrorBoundary', () => {
		expect(wrapper.find(ErrorBoundary)).toHaveLength(1);
	});
	it('should render a Border', () => {
		expect(wrapper.find(Border)).toHaveLength(1);
	});
	it('should render a Switch', () => {
		expect(wrapper.find(Switch)).toHaveLength(1);
	});
	it('should render three Routes', () => {
		expect(wrapper.find(Route)).toHaveLength(3);
	});
	it('should render 2 Redirect', () => {
		expect(wrapper.find(Redirect)).toHaveLength(2);
	});
});
