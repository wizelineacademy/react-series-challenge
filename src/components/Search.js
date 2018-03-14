import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <button>Search</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
