import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifCard from '../../components/GifCard/GifCard';

export class GifList extends Component {
	render() {
		let images = null;
		if (this.props.gifsFetch) {
			images = this.props.gifsFetch.gifsList.map(gif => {
				return (
					<GifCard key={gif.id} id={gif.id} src={gif.images.fixed_height.url} />
				);
			});
		}
		return <div>{images}</div>;
	}
}

const mapStateToProps = ({ gifsFetch }) => {
	return { gifsFetch };
};

export default connect(mapStateToProps)(GifList);
