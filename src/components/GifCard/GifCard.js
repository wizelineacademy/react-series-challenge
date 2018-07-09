import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { GifContainer, Gif, GifOverlay, GifOverlayLoading, FavoriteBtn } from './GifCard.styled';
import favoriteGifsActions from "../../actions/favoriteGifs";

class GifCard extends Component {

    constructor(props) {
        super(props);

        this.state = { gifLoaded: false, isFavorite: false};
    }

    onLoadHandler = () => {
        const gifLoaded = !this.state.gifLoaded;
        this.setState({ gifLoaded });
    };

    onClickFavoriteButton = () => {

        const isFavorite = !this.state.isFavorite;
        this.setState({ isFavorite });

        if (isFavorite) {
            const { gif } = this.props;
            this.props.addFavoriteGif({ gif });

        }
    };

    render() {

        const { gif } = this.props;

        const buttonIcon = this.state.isFavorite ? <i className="fas fa-heart" /> : <i className="far fa-heart" />;

        const gifOverlay = (
            <GifOverlay>
                <FavoriteBtn onClick={this.onClickFavoriteButton} isFavorite={this.state.isFavorite}>
                    { buttonIcon }
                </FavoriteBtn>
            </GifOverlay>
        );

        const gifOverlayLoading = (
            <GifOverlayLoading>
                <p>Loading...</p>
                <p>{gif.title}</p>
            </GifOverlayLoading>
        );

        return (
            <GifContainer>
                <Gif src={gif.images.original.webp} onLoad={this.onLoadHandler} gifLoaded={this.state.gifLoaded ? 'LOADED' : 'NOT_LOADED'}/>
                {!this.state.gifLoaded ? gifOverlayLoading : gifOverlay}
            </GifContainer>
        );
    }

}


const mapDispatchToProps = (dispatch) => {

    const { addFavoriteGif } = favoriteGifsActions.creators;

    return bindActionCreators({
        addFavoriteGif,
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(GifCard);
