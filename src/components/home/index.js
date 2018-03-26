import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImagesList from '../imagesList';
import SearchBar from '../searchBar';
import actions from '../../actions'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.getContent(1);
  }

  render() {

    if(this.props.loading){
      return <div>Loading...</div>
    }
    return (
      <div>
        <SearchBar handleChange={this.props.handleSearch} />
        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const {
    getContent,
  } = actions

  return bindActionCreators({
    getContent
  }, dispatch);
}

const mapStateToProps = (state) => {
  const { loading } = state.home;

  return { loading };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);