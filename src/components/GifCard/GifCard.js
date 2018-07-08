import React, {Component} from 'react';
import { GifContainer, Gif, GifOverlay, GifOverlayLoading, FavoriteBtn } from './GifCard.styled';
class GifCard extends Component {

    constructor(props) {
        super(props);

        this.state = { gifLoaded: false };
        this.onLoadHandler = this.onLoadHandler.bind(this);
    }

    onLoadHandler = (e) => {
        const gifLoaded = !this.state.gifLoaded;
        this.setState({gifLoaded });
    };

    render() {

        const { gif } = this.props;

        const gifOverlay = (
            <GifOverlay>
                <FavoriteBtn>
                    <i className="far fa-heart"></i>
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

};

export default GifCard;
