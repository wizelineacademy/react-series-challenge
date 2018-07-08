import React from 'react';

const CardComponent = (props) => {
	const { 
		card,
		addFavorites,
		removeFavorites ,
	} = props;

	const handleFavorite = () => {
		//handle if add or remove
		//for now just add (:
		addFavorites({ card });
	}

	return (
		<div className='cardItem'>
			<div><img src={card.images.original.url} alt='' /></div>
			<div className='cardFooter'>
				<div>
					<span><a target='_blank' href={card.url}>Open</a></span>
					<span>
						<button onClick={handleFavorite}> ❤ </button>
					</span>
				</div>
			</div>
		</div>
	);
}

export default CardComponent;