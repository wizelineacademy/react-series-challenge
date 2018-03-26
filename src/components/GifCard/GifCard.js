import React from 'react';
import pugWink from '../../assets/images/Happy-Pug.png';
import {
	ImageCard,
	ImageDetails,
	Image,
	FavButton,
	FavIcon
} from '../../style/style';

const gifCard = ({ src, id, action, favorite }) => {
	let mark = null;
	if (favorite) mark = <FavIcon src={pugWink} alt="Favorite" />;
	const text = favorite ? 'Remove Favorite' : 'Add Favorite';
	const handleFavoriteClick = event => {
		action(event.target.value);
	};

	return (
		<ImageCard>
			{mark}
			<Image key={id} src={src} />
			<ImageDetails>
				<FavButton value={id} onClick={handleFavoriteClick}>
					{text}
				</FavButton>
			</ImageDetails>
		</ImageCard>
	);
};

export default gifCard;
