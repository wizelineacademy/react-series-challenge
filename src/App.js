import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HeadLink, NavBar, MainContainer } from './App.style';
import Home from './components/Home';
import Favorites from './components/Favorites';
import  './global.style';

const App = () => {
    return (
        <MainContainer>
            <header>
                <NavBar>
                    <HeadLink to='/home' activeClassName='active'>Home</HeadLink>
                    <HeadLink to='/favorites' activeClassName='active'>Favorites</HeadLink>
                </NavBar>
            </header>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/favorites' component={Favorites} />
                <Redirect to={{
                    pathname: '/home',
                    state: { from: 'Page not found' },
                }} />
            </Switch>
        </MainContainer>
    );
};

export default App;
