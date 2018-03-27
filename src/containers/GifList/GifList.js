import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GifCard from '../../components/GifCard/GifCard';
import actions from '../../actions/favorites';
import { FlexBox } from '../../style/style';

export class GifList extends Component {
	componentDidMount() {
		if (
			Object.keys(this.props.favorites).length === 0 &&
			JSON.parse(sessionStorage.getItem('myFavs'))
		) {
			//console.log('load');
			this.props.loadFavorites(JSON.parse(sessionStorage.getItem('myFavs')));
		} else {
			//console.log('no load');
		}
	}
	render() {
		let images = [];
		if (this.props.home) {
			images = this.props.gifsList.map(gif => {
				let favorite = null;
				let action = null;
				if (this.props.favorites[gif.id]) {
					favorite = true;
					action = this.props.removeFavorite;
				} else {
					favorite = false;
					action = this.props.addFavorite;
				}

				return {
					id: gif.id,
					title: gif.title,
					src: gif.images.fixed_height.url,
					favorite: favorite,
					action: action
				};
			});
		}

		if (this.props.favorite) {
			images = Object.keys(this.props.favorites).map(key => {
				return {
					id: key,
					title: this.props.favorites[key].title,
					src: this.props.favorites[key].src,
					favorite: true,
					action: this.props.removeFavorite,
					searched: this.props.favorites[key].search
				};
			});

			if (this.props.search.length > 0) {
				images = images.filter(img => {
					return (
						img.title.toLowerCase().search(this.props.search.toLowerCase()) >
							-1 ||
						img.searched.toLowerCase().search(this.props.search.toLowerCase()) >
							-1
					);
				});
			}
		}

		images = images.map(gif => (
			<GifCard
				key={gif.id}
				id={gif.id}
				gifTitle={gif.title}
				favorite={gif.favorite}
				search={this.props.search}
				src={gif.src}
				action={gif.action}
			/>
		));

		return <FlexBox>{images}</FlexBox>;
	}
}

const mapStateToProps = ({ gifsFetch, user }) => {
	return {
		gifsList: gifsFetch.gifsList,
		favorites: user.favorites,
		search: gifsFetch.search
	};
};

const mapDispatchToProps = dispatch => {
	const { addFavorite, removeFavorite, loadFavorites } = actions.creators;
	return bindActionCreators(
		{
			addFavorite,
			removeFavorite,
			loadFavorites
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(GifList);
