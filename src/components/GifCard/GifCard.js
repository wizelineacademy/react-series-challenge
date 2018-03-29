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

export const gifCard = props => {
	let mark = props.favorite ? <FavIcon src={pugWink} alt="Favorite" /> : null;
	let text = props.favorite ? 'Remove Favorite' : 'Add Favorite';

	const handleFavoriteClick = () => {
		if (props.big) {
			mark = mark === null ? <FavIcon src={pugWink} alt="Favorite" /> : null;
			text = text === 'ADD_FAVORITE' ? 'Remove Favorite' : 'Add Favorite';
		}
		if (sessionStorage) {
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
		}
		props.toggleFavorite(props.id, props.src, props.gifTitle, props.search);
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
				state: { src: props.src, gifTitle: props.gifTitle }
			}}
		>
			<Image big={props.big} key={props.id} src={props.src} />
		</Link>
	);
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

const mapStateToProps = ({ user, gifsFetch }, props) => {
	return {
		search: gifsFetch.search,
		favorite: Object.keys(user.favorites).indexOf(props.id) > -1
	};
};

const mapDispatchToProps = dispatch => {
	const { toggleFavorite } = actions.creators;
	return bindActionCreators(
		{
			toggleFavorite
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(gifCard);
