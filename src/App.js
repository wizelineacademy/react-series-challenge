import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import Gifs from './components/Gifs'
import Loading from './components/Loading'
import { Provider } from 'react-redux'
import React from 'react';
import store from './store'
import './App.css';
import search from './actions/search';



const App = () => {
  return (
    <Router>
      <Provider store={store} >
        <div className="app" >
          <header className="header" >
            <SearchBar placeholder="Search all the GIFs" />
          </header>
          <aside className="aside" >
            <nav className="navigation" >
              <NavLink className="link" exact activeClassName="active" to="/" > Home </NavLink>
              <NavLink className="link" activeClassName="active" to="/trending" > Trending </NavLink>
              <NavLink className="link" activeClassName="active" to="/favorites" > Favorites </NavLink>
            </nav>
          </aside>
          <main className="main" >
            <Switch>
              <Route path='/' component={Gifs} />
            </Switch>
          </main>
        </div>
      </Provider>
    </Router>
  )
}

export default App;
