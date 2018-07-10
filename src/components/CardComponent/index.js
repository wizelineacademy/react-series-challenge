import React from 'react';
import { CardItem, CardFooter, FavButton } from './Card.Styled';

const CardComponent = (props) => {
	const { 
		card,
		addRemoveFavorites,
	} = props;

	const handleFavorite = () => {
		addRemoveFavorites({ card });
	}
	//if( card.images.original.size > 5917958 ) throw new Error('Img too big');
	return (
		<CardItem>
			<div><img src={card.images.original.url} alt='' /></div>
			<CardFooter>
				<span><a target='_blank' href={card.url}>Source link</a></span>
				<FavButton favorite={card.isFavorite} onClick={handleFavorite}> ❤ </FavButton>
			</CardFooter>
		</CardItem>
	);
}

export default CardComponent;