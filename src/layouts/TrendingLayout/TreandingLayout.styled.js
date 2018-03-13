import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GiphyGrid } from '../../components/Giphy';
import { bindActionCreators } from 'redux';
import searchActions from '../../actions/search';
import searchImage from '../../assets/search.gif'
import {
  SearchInput,
  SearchButton,
  SearchLink,
  InputContainer,
  Container
} from './SearchLayout.styled';

export class SearchLayout extends Component {
  static defaultProps = {
  };
  static propTypes = {
    children: PropTypes.node,
  };
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    const {
      params
    } = this.props.match
    if (params.searchTerm){
      this.props.searchRequest(params.searchTerm);
    }
  }
  componentWillReceiveProps(nextProps) {
    const {
      params
    } = this.props.match
    if (nextProps.match.params.searchTerm != params.searchTerm) {
      this.props.searchRequest(nextProps.match.params.searchTerm);
    }
  }

  handleOnChange = (e) =>{
    this.props.updateSearchTerm(e.target.value);
  }


  render () {
    const {
      trending
    } = this.props;
    return (
      <Container>
        <div >
          <GiphyGrid 
            onSelect={ (e) => { console.log(e)} }
            data={trending.giphyArray} 
          />
        </div>
      </Container>
    );
  }
}
export const mapStateToProps = state => {
  const { trending } = state;

  return {
    trending,
  };
};

export const mapDispatchToProps = dispatch => {
  const searchRequest = searchActions.creators.searchRequest;
  const updateSearchTerm = searchActions.creators.updateSearchTerm;
  return bindActionCreators({
    searchRequest,
    updateSearchTerm
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchLayout);
