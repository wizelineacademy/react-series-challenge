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
			this.props.loadFavorites(JSON.parse(sessionStorage.getItem('myFavs')));
		}
	}
	render() {
		let images = [];
		if (this.props.page === 'Home') {
			if (this.props.gifsList.length === 0 && this.props.search.length > 0) {
				throw new Error('No results found');
			}
			images = this.props.gifsList.map(gif => {
				return {
					id: gif.id,
					title: gif.title,
					src: gif.images.fixed_height.url
				};
			});
		}

		if (this.props.page === 'Favorites') {
			images = Object.keys(this.props.favorites).map(key => {
				return {
					id: key,
					title: this.props.favorites[key].title,
					src: this.props.favorites[key].src,
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
			<GifCard key={gif.id} id={gif.id} gifTitle={gif.title} src={gif.src} />
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
	const { loadFavorites } = actions.creators;
	return bindActionCreators(
		{
			loadFavorites
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(GifList);
