import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions/favorites';
import pugWink from '../../assets/images/Happy-Pug.png';
import {
	ImageCard,
	ImageDetails,
	Image,
	FavButton,
	FavIcon
} from '../../style/style';

const gifCard = props => {
	if (props.big) {
	} else {
	}

	let mark = props.favorite ? <FavIcon src={pugWink} alt="Favorite" /> : null;
	let text = props.favorite ? 'Remove Favorite' : 'Add Favorite';

	const handleFavoriteClick = () => {
		if (props.big) {
			console.log('entra');
			mark = mark === null ? <FavIcon src={pugWink} alt="Favorite" /> : null;
			text = text === 'ADD_FAVORITE' ? 'Remove Favorite' : 'Add Favorite';
		}
		const currentFavs = sessionStorage.getItem('myFavs')
			? JSON.parse(sessionStorage.getItem('myFavs'))
			: {};

		if (props.favorite) {
			delete currentFavs[props.id];
		} else {
			currentFavs[props.id] = {
				src: props.src,
				title: props.gifTitle,
				search: props.search
			};
		}
		sessionStorage.setItem('myFavs', JSON.stringify(currentFavs));
		props.toogleFavorite(props.id, props.src, props.gifTitle, props.search);
	};

	const handleGoBack = () => {
		props.goBack();
	};

	const ImageLink = props.big ? (
		<div onClick={handleGoBack}>
			<Image big={props.big} key={props.id} src={props.src} />
		</div>
	) : (
		<Link
			to={{
				pathname: 'image/' + props.id,
				state: { src: props.src, favorite: props.favorite, id: props.id }
			}}
		>
			<Image big={props.big} key={props.id} src={props.src} />
		</Link>
	);
	console.log('text', text);
	return (
		<ImageCard big={props.big}>
			{mark}
			{ImageLink}
			<ImageDetails>
				<FavButton onClick={handleFavoriteClick}>{text}</FavButton>
			</ImageDetails>
		</ImageCard>
	);
};

const mapDispatchToProps = dispatch => {
	const { toogleFavorite } = actions.creators;
	return bindActionCreators(
		{
			toogleFavorite
		},
		dispatch
	);
};

export default connect(null, mapDispatchToProps)(gifCard);
