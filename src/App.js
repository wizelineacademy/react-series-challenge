import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Redirect, Route, Switch} from 'react-router-dom';
import ListadoGeneral from './components/ListadoGeneral';
import ListadoFavoritos from './components/ListadoFavoritos';
import logo from './logo.svg';
import './App.css';
import {LaLista, UnaVineta, StyledNavLink} from './App.styled';

class App extends Component {
    render() {
        let idx = 0;
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Giphy</h1>
                    </header>
                    <LaLista>
                        <UnaVineta>
                            <StyledNavLink to="/ListadoGeneral" miidx={idx++}>General</StyledNavLink>
                        </UnaVineta>
                        <UnaVineta>
                            <StyledNavLink to="/ListadoFavoritos" miidx={idx++}>Favoritos</StyledNavLink>
                        </UnaVineta>
                    </LaLista>
                    <Switch>
                        <Route path="/ListadoGeneral" component={ListadoGeneral}/>
                        <Route path="/ListadoFavoritos" component={ListadoFavoritos}/>
                        <Redirect to="/ListadoGeneral"/>
                    </Switch>
                </div>
            </Provider>
        );
    }
}

export default App;
