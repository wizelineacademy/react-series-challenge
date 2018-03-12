import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import actions from "./ImageLoaderActions";
import { ImageTagStyled } from "./ImageLoader.styled";

class ImageLoader extends React.Component {
  componentDidMount() {
    const { image, original, imageLoaded } = this.props;
    const { images } = image;
    this.imageUrl = original ? images.original.url : images.fixed_width.url;

    const holder = new Image();
    holder.src = this.imageUrl;
    holder.onload = () => imageLoaded(image.id);
  }

  render() {
    const { loaded, image, width, height } = this.props;

    if (!loaded[image.id]) return null;
    return <ImageTagStyled src={this.imageUrl} width={width} height={height} />;
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
