import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import favoritesActions from '../actions/favorites';

const GifPreview = styled.img`
height: 140px;
width: 140px;
border: 10px solid black;
`;
const Wrapper = styled.div`
display: inline-block;
margin: 7px;
padding: 1px;
border: 2px solid black;
`;

const LikeButton = styled.button`
background: ${props => props.liked ? 'white' : '#4267b2'};
border: 2px solid #4267b2;
border-radius: 5px;
display: block;
font-size: 18px;
color: ${props => props.liked ? '#4267b2' : 'white' };
margin: 10px auto;
`;

const GifElement = (props) => {
    const { gif, liked, id, addFavorite, deleteFavorite } = props;
    return (
        <Wrapper>
            <GifPreview src={gif}/>
            <LikeButton
                liked={liked}
                onClick={
                    () => {
                        liked ? deleteFavorite(id) : addFavorite(id)
                    }
                }
            >
                {liked ? 'Dislike' : 'Like'}
            </LikeButton>
        </Wrapper>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { favorites } = state;
    const { id } = ownProps;
    const liked = favorites.favoriteIds.indexOf(id) !== -1;
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