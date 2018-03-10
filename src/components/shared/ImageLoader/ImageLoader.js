import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import actions from "./ImageLoaderActions";
import { ImageTagStyled } from "./ImageLoader.styled";

class ImageLoader extends React.Component {
  componentDidMount() {
    const { image, imageLoaded } = this.props;

    const holder = new Image();
    holder.src = image.images.fixed_width.url;
    holder.onload = imageLoaded;
  }

  render() {
    const { loaded, size } = this.props;
    const { url } = this.props.image.images.fixed_width;

    return !loaded ? (
      <ImageTagStyled size={size} />
    ) : (
      <ImageTagStyled src={url} size={size} />
    );
  }
}

const mapStateToProps = state => {
  const { loaded } = state.imageLoaderReducer;
  return { loaded };
};

const mapDispatchToProps = dispatch => {
  const { imageLoaded } = actions.creators;
  return bindActionCreators({ imageLoaded }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageLoader);
