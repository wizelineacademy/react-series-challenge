import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import { Provider } from 'react-redux'
import React from 'react';
import store from './store'
import './App.css';



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
              <NavLink className="link" exact activeClassName="active" to="/" > Trending </NavLink>
              <NavLink className="link" activeClassName="active" to="/favorites" > Favorites </NavLink>
            </nav>
          </aside>
          <main className="main" >
            
          </main>
        </div>
      </Provider>
    </Router>
  )
}

export default App;
