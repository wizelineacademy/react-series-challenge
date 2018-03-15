import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Gif from './Gif';
import Modal from './Modal';
import history from '../history';
import { getSelectedGif } from '../selectors/selected';
import { selectedGifRemove, selectedGifRequestInfo } from '../actions/selected';

const StyledGifContainer = styled.div`
  width: 350px;
  position: relative;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction:  column;
`;

const StyledTextInfo = styled.p`
  margin: 0;
`;

export class GifDetails extends Component {
  componentDidMount() {
    const { location, selectedGifRequestInfo } = this.props;

    if (location.search.length === 0) {
      return;
    }


    /**
     * This works cause querystring will be something like:
     * ?gifId=2h3run9e32f3das
     *
     * TODO: This needs to be refactor to use a refex to match
     * the part of the query that we want.
     * (or use some lib to parse query params)
     */
    const gifId = location.search.substring(7);
    selectedGifRequestInfo(gifId);
  }

  closeHandler = () => {
    const { selectedGifRemove } = this.props;
    selectedGifRemove();
    history.goBack();
  }

  render() {
    const { gif } = this.props;

    if (!gif) {
      return null;
    }

    return (
      <Modal open onCloseClick={this.closeHandler}>
        {gif.loading
          ? <div>Loading 🌀</div>
          : (
            <div>
              <StyledGifContainer>
                <Gif
                  gif={gif}
                  imageSrc={gif && gif.images.fixed_width.url}
                  big
                />
              </StyledGifContainer>
              <StyledInfoContainer>
                <StyledTextInfo>{gif.title}</StyledTextInfo>
                {gif.user && gif.user.twitter && (
                  <StyledTextInfo>
                    Twitter: <a href={`https://twitter.com/${gif.user.username}`}>{gif.user.username}</a>
                  </StyledTextInfo>
                )}
              </StyledInfoContainer>
            </div>
          )
        }
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  gif: getSelectedGif(state)
});

const mapDispatchToProps = {
  selectedGifRemove,
  selectedGifRequestInfo
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GifDetails)
);
