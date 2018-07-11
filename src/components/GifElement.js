import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GifPreview, LikeButton, Title, Wrapper } from './GifElement.style';
import favoritesActions from '../actions/favorites';

const GifElement = (props) => {
    const { gif, liked, addFavorite, deleteFavorite } = props;
    return (
        <Wrapper>
            <GifPreview src={gif.images.preview_gif.url}/>
            <LikeButton
                liked={liked}
                onClick={
                    () => {
                        liked ? deleteFavorite(gif.id) : addFavorite({ gif })
                    }
                }
            >
                {liked ? 'Dislike' : 'Like'}
            </LikeButton>
            <Title>
                {gif.title}
            </Title>
        </Wrapper>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { favorites } = state;
    const { data } = favorites;
    const { gif } = ownProps;
    const liked = data[gif.id] !== undefined;
    return {
        liked,
    };
};

const mapDispatchToProps = (dispatch) => {
    const { addFavorite, deleteFavorite } = favoritesActions.creators;
    return bindActionCreators({
        addFavorite,
        deleteFavorite,
    }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(GifElement);