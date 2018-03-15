import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getSearchItems,
  updateQuery
} from '../actions';

class Search extends Component {
  onClick() {
    const { getSearchItems, query } = this.props;
    getSearchItems(query);
  }

  onUpdateQuery({ target }) {
    this.props.updateQuery(target.value);
  }

  render() {
    const { query } = this.props;
    return (
      <div>
        <input
          type='text'
          value={query}
          onChange={this.onUpdateQuery.bind(this)}
        />
        <button onClick={this.onClick.bind(this)}>Search</button>
      </div>
    );
  }
}

const mapStateToProps = ({ search }) =>
  ({ query: search.query });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSearchItems, updateQuery }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
