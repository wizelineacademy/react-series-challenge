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
    this.props.getNextPage();
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
    getNextPage,
    getPrevPage
  } = actions

  return bindActionCreators({
    getNextPage,
    getPrevPage
  }, dispatch);
}

const mapStateToProps = ({ home }) => {
  const {
    loading,
    elements,
    search,
    paginator
  } = home;

  return {
    loading,
    elements,
    search,
    paginator
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);