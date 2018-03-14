import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GifList from '../../components/GifList';
import { Message, Page } from '../../styledComponents';
import {
  toggleFavorite,
} from '../data/favorites/actions';

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
      </Message>
      <div>
        {
          (list && Object.keys(list).length > 0) &&
          <GifList
            elements={Object.values(list)}
            starred={list}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
