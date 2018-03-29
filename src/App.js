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

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Header>
						<Title>Gif Madness</Title>
						<ul>
							<li>
								<NavLink to="/Home">Home</NavLink>
							</li>
							<li>
								<NavLink to="/Favorites">Favorites</NavLink>
							</li>
						</ul>
						<SearchGif />
					</Header>
					<br />
					<ErrorBoundary>
						<Border home>
							<Switch>
								<Route path="/Home" component={Body} />
								<Route
									path="/Favorites"
									render={() => <Body FavoriteSection />}
								/>
								<Route
									path="/image/:id"
									render={props => {
										if (props.location.state) {
											return (
												<GifCard
													src={props.location.state.src}
													gifTitle={props.location.state.gifTitle}
													id={props.match.params.id}
													goBack={props.history.goBack}
													big
												/>
											);
										} else {
											<div />;
										}
									}}
								/>
								<Redirect from="/" to="/Home" />
								<Redirect
									to={{
										pathname: '/Home',
										state: { from: 'NOT FOUND PAGE' }
									}}
								/>
							</Switch>
						</Border>
					</ErrorBoundary>
				</div>
			</Provider>
		);
	}
}

export default App;
