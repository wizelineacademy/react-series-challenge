import React from 'react';

const CardComponent = (props) => {
	const { 
		card,
		addRemoveFavorites,
	} = props;

	const handleFavorite = () => {
		addRemoveFavorites({ card });
	}
	if( card.images.original.size > 5917958 )
		throw new Error('Img too big');

	return (
		<div className='cardItem'>
			<div><img src={card.images.original.url} alt='' /></div>
			<div className='cardFooter'>
				<span><a target='_blank' href={card.url}>Source link</a></span>
				<span className='favContainer'>
					<button className={card.isFavorite?'favorite':''} onClick={handleFavorite}> ❤ </button>
				</span>
			</div>
		</div>
	);
}

export default CardComponent;