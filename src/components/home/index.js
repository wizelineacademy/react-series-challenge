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
    this.props.getTrending(0);
  }

  render() {

    if(this.props.loading){
      return <div>Loading...</div>
    }
    return (
      <div>
        <SearchBar handleChange={this.props.handleSearch} />
        <ImagesList />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const {
    getTrending,
    handleSearch
  } = actions

  return bindActionCreators({
    getTrending,
    handleSearch
  }, dispatch);
}

const mapStateToProps = (state) => {
  const { loading } = state;

  return { loading };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);