import React, { Component } from 'react';
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

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredElements: {},
      filtered: false,
    }
  }

  handleSearch(event){
    const text = event.target.value;
    if(text !== '') {
      const currentElements = this.props.favorites.list;
      const myRe = new RegExp(text, 'g');
      const newList = Object.values(currentElements).filter(value => {
        return value.title.match(myRe);
      })
      this.setState({
        filteredElements: newList,
        filtered: true,
      });
    } else {
      this.setState({
        filteredElements: {},
        filtered: false,
      });
    }
  }

  render(){
    const {
      list,
    } = this.props.favorites;

    const listElements = this.state.filtered ? this.state.filteredElements : list;

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
                handleSearch={this.handleSearch}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
