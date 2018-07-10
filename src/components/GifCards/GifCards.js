import React, {Fragment} from 'react';
import GifCard from '../GifCards/GifCard/GifCard'
import GifCardControls from '../GifCards/GifCardControls/GifCardControls'
import { GifCardsStyled, StyledH1 } from './GifCards.styled';

const GifCards = (props) => {

        let arrays = null;
        const { gifData, searchedValue, addRemoveGif } = props; 
        //console.log("Card props", props);

        if(gifData !== null && gifData !== undefined){
            arrays = Object.keys(gifData).map((key, index) => {
                let { id, url, isFavorite } = gifData[index];
                return (
                <GifCardsStyled key = {id} >
                    <GifCard imageUrl = {url}/>

                    <GifCardControls 
                    key = {index} 
                    addRemoveGif = {() => addRemoveGif({ id: id, searchedValue: searchedValue, url: url})} 
                    isFavorite = {isFavorite} />
                </GifCardsStyled>);
            });

            if(arrays.length === 0){
                arrays = <StyledH1> No Results Found :(. Go search and fav some awesome gifs! </StyledH1>;
            }
        }

        return(
            <Fragment>
                { arrays }
            </Fragment>
        )
    
}

export default GifCards;