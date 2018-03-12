import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import Tile from "../shared/Tile";
import actions from "./DetailsActions";
import {
  DetailsWrapperStyled,
  TextStyled,
  TextDetailsWrapperStyled
} from "./Details.styled";

class Details extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.gifRequested({ id });
  }

  render() {
    const { gif, loaded } = this.props;

    if (!loaded) return <div>loading ...</div>;
    return (
      <DetailsWrapperStyled>
        <Tile gif={gif} original={true} />
        <TextDetailsWrapperStyled>
          <TextStyled>{gif.title}</TextStyled>
          <TextStyled>
            uploaded by <a href={gif.user.profile_url}>{gif.username}</a>
          </TextStyled>
          <TextStyled>
            <a href={gif.url}>view on Giphy </a>
          </TextStyled>
        </TextDetailsWrapperStyled>
      </DetailsWrapperStyled>
    );
  }
}

const mapStateToProps = state => {
  const { gif, loaded } = state.detailsReducer;
  return { gif, loaded };
};

const mapDispatchToProps = dispatch => {
  const { gifRequested } = actions.creators;
  return bindActionCreators({ gifRequested }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
