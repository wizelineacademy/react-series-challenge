import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CenterContenteDiv from '../../styles/containers/CenterContenteDiv';
import GifPreview from '../GifPreview';
import GoBackControl from '../GoBackControl';
import DetailsViewStyled from './DetailsViewStyled';
import {withRouter} from 'react-router';
import gifDetails, {selector as gifSelector} from '../../reducers/gif';
import {HOME_PATH, DETAILS_VARIABLE_PATH} from '../../config/routerConstants';

class DetailsView extends React.Component {

  /**
   * Scans the displayed and favorites values in the state to retrieve the gif
   * and display it.
   * @return {object} the gif object or null if the gif was not found. It adds
   * a marked flag that is true if the gif was found in the favorites collection.
   */
  retrieveGifDetails = () => {
    let result = null;

    const {displayed, favorites} = this.props.gifDetails;
    const currentGifId = this.props.match.params[DETAILS_VARIABLE_PATH];

    const captureFunction = (gifDetail) => {
      if (gifDetail.id === currentGifId) {
        result = gifDetail;

        return true;
      }
      return false;
    };

    // Scan the favorites first
    favorites.some(captureFunction);
    if (!result) {
      displayed.some(captureFunction);
      if (result) {
        result.markedFlag = false;
      }
    } else {
      result.markedFlag = true;
    }

    return result;
  }

  componentDidMount() {
    if (!this.retrieveGifDetails()) {
      this.props.history.push(HOME_PATH);
    }
  }

  render()  {
    const gifDetails = this.retrieveGifDetails();

    if (!gifDetails) {

      return null;
    }

    return (
      <CenterContenteDiv direction="column">
        <GoBackControl onClick={() => this.props.history.goBack()}> Go back</GoBackControl>
        <DetailsViewStyled>
          <GifPreview gifDetails={gifDetails}
            alt="Unable to get the gif image"
            marked={gifDetails.markedFlag}
            escaleFactor={2}/>
        </DetailsViewStyled>
      </CenterContenteDiv>
    );
  }
};

const mapStateToProps = (state) => ({
  gifDetails: gifSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({...gifDetails.actions}, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsView));
