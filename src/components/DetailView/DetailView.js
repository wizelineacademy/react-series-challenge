import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import detailGif from "../../actions/detailGif";
import {Container} from "../../App.styled";
import {Gif} from "../Gif/Gif";
class DetailView extends Component {
  constructor(props) {
    super(props);
    const gifId = props.match.params.gifId;
    props.getSingleGifRequested(gifId);
  }
  render() {
    const { gif } = this.props.detailGif;
    return (
      <Container>
        <Gif gif={gif} fullWidth={true}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { detailGif } = state;
  return { detailGif };
};
const mapDispatchToProps = (dispatch) => {
  const { getSingleGifRequested } = detailGif.creators;

  return bindActionCreators({
    getSingleGifRequested,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);