import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';
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
      <div style={{ background: '#000' }}>
        <Switch>
            <Route path={ `/:view` } component={ GridLayout } />
            <Route path={ `/:view/:searchTerm` } component={ GridLayout } />
        </Switch>
      </div>
    );
  }
}
 