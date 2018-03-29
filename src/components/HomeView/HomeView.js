import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CenterContenteDiv from '../../styles/containers/CenterContenteDiv';
import GifListRow from '../../styles/containers/GifListRow';
import GifPreview from '../GifPreview';
import SearchBar from '../SearchBar';
import gifDetails, {selector as gifSelector} from '../../reducers/gif';

class HomeView extends React.Component {
  constructor(props) {
    super(props);

    props.actions.trendingFetchRequested();
  }

  handleSearchText = (event) => {
    if (event && event.target && event.target.value) {
      this.props.actions.searchFetchRequested(event.target.value);
    } else {
      // If no input get the trending images.
      this.props.actions.trendingFetchRequested();
    }
  };

  render()  {
    const {displayed} = this.props.gifDetails;

    return (
      <div>
        <CenterContenteDiv direction="column">
            <SearchBar placeholder="Let me know what are you looking for?" searchText={this.handleSearchText}/>
        </CenterContenteDiv>
        {
          displayed.map(gif => {
            const {favorites} = this.props.gifDetails;
            const marked = favorites.some((favorite) => favorite.id === gif.id);
            return (
              <GifListRow key={gif.id}>
                <CenterContenteDiv>
                  <GifPreview gifDetails={gif} marked={marked} alt="Gif preview can not be retrieved"/>
                </CenterContenteDiv>
              </GifListRow>);
            }
          )
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  gifDetails: gifSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({...gifDetails.actions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
