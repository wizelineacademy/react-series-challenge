import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GifList from '../../components/GifList';
import { Row, Col } from '../../components/Grid';
import SearchGif from '../../components/SearchGif';
import { Message, Page } from '../../styledComponents';
import {
  toggleFavorite,
  filterFavorites,
} from '../data/favorites/actions';
import {
  setCurrentGif,
} from '../data/view/actions';

class Favorites extends Component {
  render(){
    const {
      list,
      filtered,
      filteredElements,
    } = this.props.favorites;

    const handleSearch = (event) => {
      const text = event.target.value;
      this.props.handleFilterGifs(text);
    }

    let listElements = list;
    if(filtered) {
      listElements = filteredElements;
    }

    return (
      <Page>
        <Message>
          The best of the best!
          <p>
            These are the most popular GIFs!
          </p>
          <p>
            Go back to trend GIFs&ensp;
            <Link
              to="/"
            >
              here!
            </Link>
          </p>
          <hr />
          <p>
            Search within your favorite here
          </p>
          <Row>
            <Col span={12}>
              <SearchGif
                handleSearch={handleSearch}
              />
            </Col>
          </Row>
        </Message>
        <div>
          {
            (listElements && Object.keys(listElements).length > 0) &&
            <GifList
              elements={Object.values(listElements)}
              starred={list}
              handleSetGif={this.props.handleSetGif}
              handleToggleFav={this.props.handleToggleFav}
            />
          }
          {
            (!listElements || Object.keys(listElements).length === 0) &&
            <p>
              There are not favorites yet :/
            </p>
          }
        </div>
      </Page>
    );
  }
};

const mapStateToProps = state => {
  const {
    favorites,
  } = state.pages;

  return {
    favorites,
  };
};

const mapDispatchToProps = dispatch => ({
  handleToggleFav: (element) => dispatch(toggleFavorite(element)),
  handleSetGif: (element) => dispatch(setCurrentGif(element)),
  handleFilterGifs: (text) => dispatch(filterFavorites(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
