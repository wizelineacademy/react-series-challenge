import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GifList from '../../components/GifList';
import { Row, Col } from '../../components/Grid';
import SearchGif from '../../components/SearchGif';
import { Message, Page } from '../../styledComponents';
import {
  toggleFavorite,
} from '../data/favorites/actions';
import {
  setCurrentGif,
} from '../data/view/actions';

const Favorites = (props) => {
  const {
    list,
  } = props.favorites;

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
            <SearchGif />
          </Col>
        </Row>
      </Message>
      <div>
        {
          (list && Object.keys(list).length > 0) &&
          <GifList
            elements={Object.values(list)}
            starred={list}
            handleSetGif={props.handleSetGif}
            handleToggleFav={props.handleToggleFav}
          />
        }
        {
          (!list || Object.keys(list).length === 0) &&
          <p>
            There are not favorites yet :/
          </p>
        }
      </div>
    </Page>
  );
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
