import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './components/common/Theme/Global'

import Home from './components/Home'
import Favorites from './components/Favorites'
import Navbar from './components/common/Navbar';
import Detail from './components/Deatail';



class App extends Component {
  render() {
    return (


      <div>
        <header>
          <Navbar />
          
        </header>
        <div>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/detail/:id" component={Detail} />

        </div>
      </div>



    );
  }
}

export default App;
