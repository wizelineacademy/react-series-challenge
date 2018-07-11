import React, { Component } from 'react';
import { CardItem } from '../CardComponent/Card.Styled';

class CardErrorB extends Component {
	constructor(props) {
		super(props);
		this.state = {
	  		hasErrors: false,
	  		info: '',
		}
	}

	componentDidCatch(error, info) {
	  this.setState(() => ({
	    hasErrors: true,
	    info,
	  }));
	}

	render() {
		const { children } = this.props;
		const { hasErrors } = this.state;

		if (hasErrors) {
			return <CardItem>
				<p>Image toooo big</p>
			</CardItem>
		}
		return children;
	}
}
export default CardErrorB;