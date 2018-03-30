import React from 'react';
import {
	Route,
	Redirect,
	NavLink,
	Switch,
	MemoryRouter
} from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Body from './containers/Body/Body';
import { shallowToJson } from 'enzyme-to-json';
import SearchGif from './components/SearchGif/SearchGif';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Border, Title, Header } from './style/style';
import App from './App';

describe('App', () => {
	let wrapper;
	let store;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});
	it('should match Snapshot', () => {
		const wrapper2 = mount(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		expect(shallowToJson(wrapper2)).toMatchSnapshot();
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
	it('should redirect to Favorites', () => {
		const wrapper2 = mount(
			<MemoryRouter initialEntries={['/favorites']}>
				<App />
			</MemoryRouter>
		);
		expect(wrapper2.find(Body).length).toBe(1);
	});
	it('should match Snapshot /favorites', () => {
		const wrapper2 = mount(
			<MemoryRouter initialEntries={['/favorites']}>
				<App />
			</MemoryRouter>
		);
		expect(shallowToJson(wrapper2)).toMatchSnapshot();
	});
	it('should match Snapshot /images', () => {
		const wrapper2 = shallow(
			<MemoryRouter initialEntries={['/image/123']}>
				<App
					location={{ state: { src: 'src', gifTitle: 'gifTitle' } }}
					match={{ params: { id: '123' } }}
					history={{ goBack: () => 'test' }}
					store={store}
				/>
			</MemoryRouter>
		);
		expect(shallowToJson(wrapper2)).toMatchSnapshot();
	});
	it('should match Snapshot /images', () => {
		const wrapper2 = mount(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>
		);
		wrapper2
			.find(NavLink)
			.first()
			.simulate('click');
		expect(shallowToJson(wrapper2)).toMatchSnapshot();
	});
	it('should match Snapshot /images', () => {
		const wrapper2 = mount(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>
		);
		wrapper2
			.find(NavLink)
			.first()
			.simulate('click');
		wrapper2
			.find(NavLink)
			.at(1)
			.simulate('click');
		expect(shallowToJson(wrapper2)).toMatchSnapshot();
	});
});
