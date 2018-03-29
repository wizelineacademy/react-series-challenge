import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, NavLink, Switch } from 'react-router-dom';

import GifCard from './components/GifCard/GifCard';
import Body from './containers/Body/Body';
import SearchGif from './components/SearchGif/SearchGif';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import store from './store';
import global from './style/global';
import { Border, Title, Header } from './style/style';
import App from './App';

describe('App', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});
	it('should render a Header', () => {
		expect(wrapper.find(Header)).toHaveLength(1);
	});
});
