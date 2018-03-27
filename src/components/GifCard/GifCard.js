import React from 'react';
import pugWink from '../../assets/images/Happy-Pug.png';
import {
	ImageCard,
	ImageDetails,
	Image,
	FavButton,
	FavIcon
} from '../../style/style';

const gifCard = ({ src, id, action, favorite, gifTitle, search }) => {
	let mark = null;
	if (favorite) mark = <FavIcon src={pugWink} alt="Favorite" />;
	const text = favorite ? 'Remove Favorite' : 'Add Favorite';

	const handleFavoriteClick = () => {
		const currentFavs = sessionStorage.getItem('myFavs')
			? JSON.parse(sessionStorage.getItem('myFavs'))
			: {};

		if (favorite) {
			delete currentFavs[id];
		} else {
			currentFavs[id] = {
				src: src,
				title: gifTitle,
				search: search
			};
		}
		sessionStorage.setItem('myFavs', JSON.stringify(currentFavs));
		action(id, src, gifTitle, search);
	};

	return (
		<ImageCard>
			{mark}
			<Image key={id} src={src} />
			<ImageDetails>
				<FavButton onClick={handleFavoriteClick}>{text}</FavButton>
			</ImageDetails>
		</ImageCard>
	);
};

export default gifCard;
