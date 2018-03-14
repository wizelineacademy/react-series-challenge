import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Menu } from '../../components/Menu';
import GridLayout from '../GridLayout';

export class MainAppLayout extends Component {
  static defaultProps = {
  };
  static propTypes = {
    children: PropTypes.node,
  };
  constructor (props) {
    super(props);

    /* istanbul ignore next */
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    
  }
  render () {
    return (
      <div>
        <Menu />
        <Switch>
            <Route exact path={ `/view/:view` } component={ GridLayout } />
            <Route exact path={ `/view/:view/:searchTerm` } component={ GridLayout } />
            <Route exact path={ `/` } component={ GridLayout } />
        </Switch>
      </div>
    );
  }
}
 