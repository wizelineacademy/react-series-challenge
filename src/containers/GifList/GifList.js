import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GifCard from '../../components/GifCard/GifCard';
import actions from '../../actions/favorites';
import { FlexBox } from '../../style/style';

export class GifList extends Component {
	render() {
		let images = null;
		if (this.props.gifsList.length > 0) {
			images = this.props.gifsList.map(gif => {
				let favorite = null;
				let action = null;
				if (this.props.favorites.indexOf(gif.id) > -1) {
					favorite = true;
					action = this.props.removeFavorite;
				} else {
					favorite = false;
					action = this.props.addFavorite;
				}

				return (
					<GifCard
						key={gif.id}
						id={gif.id}
						favorite={favorite}
						src={gif.images.fixed_height.url}
						action={action}
					/>
				);
			});
		}
		return <FlexBox>{images}</FlexBox>;
	}
}

const mapStateToProps = ({ gifsFetch, user }) => {
	return {
		gifsList: gifsFetch.gifsList,
		favorites: user.favorites
	};
};

const mapDispatchToProps = dispatch => {
	const { addFavorite, removeFavorite } = actions.creators;
	return bindActionCreators(
		{
			addFavorite,
			removeFavorite
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(GifList);
