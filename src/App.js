import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import Favorites from './components/Favorites';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='App'>
                    <header>
                        <nav>
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/favorites'>Favorites</NavLink>
                        </nav>
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
