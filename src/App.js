import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Redirect, Route, Switch} from 'react-router-dom';
import ListadoGeneral from './components/ListadoGeneral';
import ListadoFavoritos from './components/ListadoFavoritos';
import logo from './logo.svg';
import {AppHeader, AppTitle, DivApp, ImgLogo, LaLista, StyledNavLink, UnaVineta} from './App.styled';

class App extends Component {
    render() {
        let idx = 0;
        return (
            <Provider store={store}>
                <DivApp>
                    <AppHeader>
                        <ImgLogo src={logo} alt="logo"/>
                        <AppTitle>Giphy</AppTitle>
                    </AppHeader>
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
                </DivApp>
            </Provider>
        );
    }
}

export default App;
