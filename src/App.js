import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch,} from 'react-router-dom';
import ListadoGeneral from './components/ListadoGeneral';
import ListadoFavoritos from './components/ListadoFavoritos';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Giphy</h1>
                </header>
                <ul>
                    <li><NavLink to="/ListadoGeneral">General</NavLink></li>
                    <li><NavLink to="/ListadoFavoritos">Favoritos</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/ListadoGeneral" component={ListadoGeneral}/>
                    <Route path="/ListadoFavoritos" component={ListadoFavoritos}/>
                    <Redirect to="/ListadoGeneral"/>
                </Switch>
            </div>
        );
    }
}

export default App;
