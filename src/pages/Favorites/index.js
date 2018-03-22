import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import GifList from '../../components/GifList';
import { Row, Col } from '../../components/Grid';
import SearchGif from '../../components/SearchGif';
import { Message, Page } from '../../styledComponents';
import * as Actions from '../actionCreators/favorites';

class Favorites extends Component {
  render(){
    const {
      list,
      filtered,
      filteredElements,
    } = this.props.favorites;

    const handleSearch = (event) => {
      const text = event.target.value;
      this.props.filterFavorites(text);
    }

    let listElements = list;
    if(filtered) {
      listElements = filteredElements;
    }

    const hasElements = (listElements && Object.keys(listElements).length > 0);

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
            hasElements ?
              <GifList
                elements={Object.values(listElements)}
                starred={list}
                handleSetGif={this.props.setCurrentGif}
                handleToggleFav={this.props.toggleFavorite}
              />
            :
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

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
