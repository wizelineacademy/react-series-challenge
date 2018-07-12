import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {
    GifContainer,
    Gif,
    GifOverlay,
    GifTitle,
    GifOverlayLoading,
    FavoriteBtn
} from './GifCard.styled';
import favoriteGifsActions from "../../actions/favoriteGifs";

const LOCAL_STORAGE_FAV_GIFS = 'favoriteGifs';

class GifCard extends Component {

    constructor(props) {
        super(props);

        let isFavorite = this.gifInLocalStorage();
        if (isFavorite) {
            this.props.addFavoriteGif({ gif: this.props.gif, isFavorite });
        }
        this.state = { gifLoaded: false, isFavorite };
    }

    gifInLocalStorage() {
        const localFavoriteGifs = localStorage.getItem(LOCAL_STORAGE_FAV_GIFS);
        const jsonGifs = JSON.parse(localFavoriteGifs);
        return (jsonGifs && !!jsonGifs[this.props.gif.id]);
    }

    onLoadHandler = () => {
        const gifLoaded = !this.state.gifLoaded;
        this.setState({ gifLoaded });
    };

    onClickFavoriteButton = () => {

        const isFavorite = !this.state.isFavorite;
        const { gif } = this.props;
        this.setState({ isFavorite });

        if (isFavorite) {
            this.props.addFavoriteGif({ gif, isFavorite });
        } else {
            this.props.deleteFavoriteGif({ gif, isFavorite });
        }
    };

    render() {

        const { gif } = this.props;

        const buttonIcon = this.state.isFavorite ? <i className="fas fa-heart" /> : <i className="far fa-heart" />;

        const gifOverlay = (
            <GifOverlay>
                <GifTitle>
                    { (gif) ? gif.title : 'No GIF'}
                </GifTitle>
                <FavoriteBtn onClick={this.onClickFavoriteButton} isFavorite={this.state.isFavorite}>
                    { buttonIcon }
                </FavoriteBtn>
            </GifOverlay>
        );

        const gifOverlayLoading = (
            <GifOverlayLoading>
                <p>Loading...</p>
                <p>{(gif) ? gif.title : 'No Gif'}</p>
            </GifOverlayLoading>
        );

        return (
            gif ?
            <GifContainer>
                <Gif src={gif.images.original.webp} onLoad={this.onLoadHandler} gifLoaded={this.state.gifLoaded ? 'LOADED' : 'NOT_LOADED'}/>
                {!this.state.gifLoaded ? gifOverlayLoading : gifOverlay}
            </GifContainer> :
                <h1>No GIF</h1>
        );
    }

}


const mapDispatchToProps = (dispatch) => {

    const { addFavoriteGif, deleteFavoriteGif } = favoriteGifsActions.creators;

    return bindActionCreators({
        addFavoriteGif,
        deleteFavoriteGif,
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(GifCard);
