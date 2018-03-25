import React from 'react';
import { ImageCard, ImageDetails, Image } from '../../style/style';

const gifCard = ({ src, id }) => (
	<ImageCard>
		<Image key={id} src={src} />
		<ImageDetails>
			<button>Add Favorite</button>
			<span>Favorite</span>
		</ImageDetails>
	</ImageCard>
);

export default gifCard;
