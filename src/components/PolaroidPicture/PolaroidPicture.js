import React, { Component } from 'react';
import {
  PolaroidListItem,
  PolaroidLink,
  PolaroidStar,
  PolaroidButton,
  PolaroidLoading,
} from './style.js'

class PolaroidPicture extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render () {
    const { gif, favorites, favoriteGif, isSingleView, getGif } = this.props;
    if (!gif) {
      return null;
    }

    const handleImageChange = () => {
      this.setState({
        loading: false
      });
    };

    const isFavorite = favorites.includes(gif.id)
    
    return (
      <PolaroidListItem isSingleView={isSingleView}>
        <img src={gif.images.original.url} alt={gif.title} onLoad={handleImageChange.bind(this)} />
        { this.state.loading && <PolaroidLoading /> }
        <br />
        { !isSingleView && 
          <PolaroidButton className='like-button' onClick={() => favoriteGif(gif.id)} color={'red'}>
            { !isFavorite ? 'Like' : 'Unlike' }
          </PolaroidButton>
        }
        { !isSingleView && 
          <PolaroidLink to={`/gifs/${gif.id}`}>
            <PolaroidButton className='view-button' onClick={() => getGif(gif.id)} color={'blue'}>
              View
            </PolaroidButton>
          </PolaroidLink>
        }
        { isFavorite && <PolaroidStar /> }
        { isSingleView &&
          <p>
            Title: { gif.title } <br/>
            Created on: { gif.import_datetime } <br/>
            Short url: { gif.bitly_url } <br />
            SFW?: { gif.rating !== 'r' ? 'Yes!' : 'No! Why did you search for this?' } <br />
          </p>
        }
      </PolaroidListItem>
    )
  }
}

export default PolaroidPicture;