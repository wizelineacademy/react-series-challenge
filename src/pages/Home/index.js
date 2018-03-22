import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import GifList from '../../components/GifList';
import { Row, Col } from '../../components/Grid';
import SearchGif from '../../components/SearchGif';
import { Message, Page } from '../../styledComponents';
import { debounce } from '../../utils/utils';
import * as Actions from '../actionCreators/home';

class Home extends Component {
  componentWillMount(){
    this.props.fetchTrendingGifs();
  }

  render(){
    const {
      gifs,
      searching: isSearching,
      error: hasError,
    } = this.props.home;

    const {
      list,
    } = this.props.favorites;

    const searchForGif = debounce((text) => {this.props.searchGifs(text)}, 1000);
    const fetchCorrectly = (!isSearching && !hasError && gifs);

    return (
      <Page>
        <Message>
          Hello!
          <p>
            These are the most popular GIFs!
          </p>
          <p>
            Visit your Favorites&ensp;
            <Link
              to="/favorites"
            >
              here!
            </Link>
          </p>
          <hr />
          <p>
            Search for more here
          </p>
          <Row>
            <Col span={12}>
              <SearchGif
                handleSearch={event => searchForGif(event.target.value)}
              />
            </Col>
          </Row>
        </Message>
        <div>
          {
            isSearching &&
            <p> Searching ... </p>
          }
          {
            hasError &&
            <p> There was an error </p>
          }
          { fetchCorrectly &&
            <GifList
              elements={gifs.data}
              starred={list}
              handleSetGif={this.props.setCurrentGif}
              handleToggleFav={this.props.toggleFavorite}
            />
          }
        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  const {
    home,
    favorites,
  } = state.pages;

  return {
    home,
    favorites,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
