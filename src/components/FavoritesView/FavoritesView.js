import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CenterContenteDiv from '../../styles/containers/CenterContenteDiv';
import GifListRow from '../../styles/containers/GifListRow';
import GifPreview from '../GifPreview';
import SearchBar from '../SearchBar';
import gifDetails, {selector as gifSelector} from '../../reducers/gif';

class FavoritesView extends React.Component {
  handleSearchText = (event) => {
    if (event && event.target && event.target.value) {
      this.props.actions.updateFavoritesTextFilter(event.target.value);
    } else {
      // If no input get the trending images.
      this.props.actions.updateFavoritesTextFilter('');
    }
  }

  render()  {
    const {favorites, favoritesTextFilter} = this.props.gifDetails;

    return (
      <div>
        <CenterContenteDiv direction="column">
            <SearchBar placeholder="Enter a text to filter your favorites"
              searchText={this.handleSearchText}/>
        </CenterContenteDiv>
        {
          favorites.map(gif => {
            let result = null;
            let gifTitle = gif.title.toLowerCase();;

            if (!favoritesTextFilter || gifTitle.includes(favoritesTextFilter)) {
              result = (
                <GifListRow key={gif.id}>
                  <CenterContenteDiv>
                    <GifPreview gifDetails={gif} marked
                      alt="Gif preview can not be retrieved"/>
                  </CenterContenteDiv>
                </GifListRow>);
              }

            return result;
          })
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

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesView);
