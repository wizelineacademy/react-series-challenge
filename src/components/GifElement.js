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
max-width: 160px;
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
margin: 5px auto;
`;

const Title = styled.p`
font-size: 15px;
color: #444;
text-align: center;
`;

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