import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Title, Content, FavoriteList, FilterBar } from "./FavoriteList.styled";
import favorites from '../../actions/favorites';
import GifThumb from "../GifThumb";
import SVG from "../SVG";

export class FavoriteListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.input = null;
		this.filter = this.filter.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
	}
	filter() {
		this.props.filterFavorite(this.input.value);
		return this.input.value;
	}
	onKeyDown(event) {
		if (event.keyCode === 13)
		{
			this.filter();
		}
	}
	componentWillUnmount()
	{
		this.props.filterFavorite('');
	}
	render() {
		var self = this;
		var favoriteItems = Object.keys(this.props.favorites.gifs).map(function(property) {
			var item = self.props.favorites.gifs[property];
			if (self.props.favorites.filter)
			{
				if (item.title.search(self.props.favorites.filter) === -1)
				{
					return null;
				}
			}
			
			return (<GifThumb key={item.id} id={item.id} image={item.image} title={item.title}/>);
		});
		return (
			<FavoriteList>
					<Content>
						<Title>Favorites:{this.props.favorites.filter}</Title>
						<div>{favoriteItems}</div>
					</Content>
					<FilterBar>
						<input placeholder="Filter" type="text" onKeyDown={this.onKeyDown} ref={input => {this.input = input;}}/>
						<span className="filter-icon" onClick={this.filter}>{SVG.Filter}</span>
					</FilterBar>
			</FavoriteList>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		favorites: state.favorites
	};
};
const mapDispatchToProps = (dispatch) => {
	const { filterFavorite } = favorites.creators;
	return bindActionCreators({
		filterFavorite
	}, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteListComponent);
