import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux'
import React from 'react';
import './App.css';



const App = () => {
  return (
    <Router>
      <Provider>
        <div className="app" >
          <aside className="aside" >
            <nav className="navigation" >
              <NavLink to="/" > Trending </NavLink>
              <NavLink to="/favorites" > Favorites </NavLink>
            </nav>
          </aside>
          <main className="main" >
            <header>
              { /** SEARCH BAR */  }
            </header>
            { /** RESULTS GRID  */ }
          </main>
        </div>
      </Provider>
    </Router>
  )
}

export default App;
