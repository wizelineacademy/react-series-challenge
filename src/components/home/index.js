import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImagesList from '../imagesList';
import SearchBar from '../searchBar';
import actions from '../../actions';
import Wrapper from '../wrapper'


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
      <Wrapper>
        <SearchBar handleChange={this.props.changeSearchType} handleSearch={this.props.changeSearch} value={this.props.search} />
        <ImagesList list={this.props.elements} />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const {
    getNextPage,
    getPrevPage,
    changeSearch,
    changeSearchType
  } = actions

  return bindActionCreators({
    getNextPage,
    getPrevPage,
    changeSearch,
    changeSearchType
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