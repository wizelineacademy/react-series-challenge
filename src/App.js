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
import { Wrapper } from './styled/ContainersStyled';
import Home from './components/home';
import Favorites from './components/favorites';
import Details from './components/details';
import actions from './actions';

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
    this.props.loadFavoritesR()
  }
  render() {
    return (
      <Router>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route path='/image/:id' component={Details} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/' exact component={Home} />
            <Redirect to= '/' />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { loadFavoritesR } = actions;

  return bindActionCreators({ loadFavoritesR }, dispatch);
}

export default connect(null,mapDispatchToProps)(App);
