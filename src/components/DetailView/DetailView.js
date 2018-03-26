import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import detailGif from "../../actions/detailGif";
import {Container} from "../../App.styled";
import {Gif} from "../Gif/Gif";
import favoritesGifs from "../../actions/favoritesGifs";

const isFavorited = (favorites, gifId) => {
  return favorites[gifId] !== undefined;
};

class DetailView extends Component {
  constructor(props) {
    super(props);
    const gifId = props.match.params.gifId;
    props.getSingleGifRequested(gifId);
  }
  render() {
    const { addGif, removeGif, favoritesGifs } = this.props;
    const { gif } = this.props.detailGif;
    return (
      <Container>
        <Gif
          gif={gif}
          fullWidth={true}
          isInDetail={true}
          addGif={addGif}
          removeGif={removeGif}
          isFavorited={isFavorited(favoritesGifs.allGifs, gif.id)}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { detailGif, favoritesGifs } = state;
  return { detailGif, favoritesGifs };
};
const mapDispatchToProps = (dispatch) => {
  const { getSingleGifRequested } = detailGif.creators;
  const { addGif, removeGif } = favoritesGifs.creators;

  return bindActionCreators({
    addGif,
    removeGif,
    getSingleGifRequested,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);