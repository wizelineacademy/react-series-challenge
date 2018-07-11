import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HeadLink, NavBar } from './App.style';
import store from './store';
import Home from './components/Home';
import Favorites from './components/Favorites';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='App'>
                    <header>
                        <NavBar>
                            <HeadLink to='/home' actvieClass='active'>Home</HeadLink>
                            <HeadLink to='/favorites'>Favorites</HeadLink>
                        </NavBar>
                    </header>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/favorites' component={Favorites}/>
                        <Redirect to={{
                            pathname: "/home",
                            state: { from: 'Page not found' },
                        }}/>
                    </Switch>
                </div>
            </Provider>
        );
    }
}

export default App;
