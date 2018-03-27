import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navbar from './components/navbar';
import Wrapper from './components/wrapper';
import Home from './components/home';
import actions from './actions'
// import logo from './logo.svg';
// import './App.css';

import { injectGlobal } from 'styled-components';

injectGlobal`
  body{
    background-color: #000;
    overflow-x:hidden;
    padding-bottom: 20px;
  }
`

class App extends Component {
  componentWillMount(){
    this.props.loadFavorites()
  }
  render() {
    return (
      <Router>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route path='/image/:id' />
            <Route path='/favorites' />
            <Route path='/' exact component={Home} />
            <Redirect to= '/not-found' />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { loadFavorites } = actions;

  return bindActionCreators({ loadFavorites }, dispatch);
}

export default connect(null,mapDispatchToProps)(App);
