import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import actions from "../../actions";
import { connect } from "react-redux";

const { searchGifs } = actions.creators;

class SearchBar extends Component {

  componentDidMount() {
    this.input.value = this.props.searchQuery;
  }

  render () {
    return (
      <input 
        onChange={(e) => this.props.searchGifs(e.target.value)} 
        type='text' 
        placeholder='Search'
        ref={el => this.input = el}
      />
    )
  }
}

const mapStateToProps = state => ({
  searchQuery: state.searchQuery
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ searchGifs }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);