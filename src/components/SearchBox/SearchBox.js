import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import search from '../../actions/search';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  onKeyDown = function(event)
  {
    if (event.keyCode == 13)
    {
      this.props.search(this.input.value);
    }
  }
  render() {
    return (
      <div>
          <input type="text" onKeyDown={this.onKeyDown} ref={input => {this.input = input;}}/>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
