import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import search from '../../actions/search';
import { SearchBoxDiv } from "./SearchBox.styled";
import SVG from '../SVG';

export class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
    this.search = this.search.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  search()
  {
    this.props.search(this.input.value);
    this.props.history.push('/search?q=' + this.input.value);
    return this.input.value;
  }
  onKeyDown(event)
  {
    if (event.keyCode === 13)
    {
      this.search();
    }
  }
  render() {
    return (
      <SearchBoxDiv>
        
        <input placeholder="Search" type="text" onKeyDown={this.onKeyDown} ref={input => {this.input = input;}}/>
        <span className="search-icon" onClick={this.search}>{SVG.Search}</span>
      </SearchBoxDiv>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    trending: state.trending
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return bindActionCreators({
    search: search.creators.search
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBox));
