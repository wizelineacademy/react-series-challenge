import React, {Component} from 'react';
import InfoPortal from './InfoPortal';

class GiphyElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'showInfo': false,
            'giphy': props.giphy
        };
        this.handleShowInfo = this.handleShowInfo.bind(this);
        this.handleHideInfo = this.handleHideInfo.bind(this);
    }

    handleShowInfo() {
        this.setState({'showInfo': true});
    }

    handleHideInfo() {
        this.setState({'showInfo': false});
    }

    render() {

        const info = this.state.showInfo && (
            <InfoPortal>
            <span>
                <p>ID: {this.state.giphy.id}, Slug: {this.state.giphy.slug}, Caption: {this.state.giphy.caption}</p>
                <button onClick={this.handleHideInfo}>Close</button>
            </span>
            </InfoPortal>
        );

        return (
            <span>
                <img
                    slug={this.state.giphy.slug}
                    src={this.state.giphy.images.fixed_height_small.url}
                    alt={this.state.giphy.caption}
                />
                <button onClick={this.handleShowInfo}>Info</button>
                {info}
            </span>
        );
    }
}

export default GiphyElement;