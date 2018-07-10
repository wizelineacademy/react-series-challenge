import React, {Component} from 'react';
import InfoPortal from './InfoPortal';

class GiphyElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'showInfo': false,
            'id': props.id,
            'slug': props.slug,
            'caption': props.caption,
            'embed_url': props.embedUrl,
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
                <p>ID: {this.state.id}, Slug: {this.state.slug}, Caption: {this.state.caption}</p>
                <button onClick={this.handleHideInfo}>Close</button>
            </span>
            </InfoPortal>
        );

        return (
            <span>
                <img src={this.state.embed_url}/>
                <button onClick={this.handleShowInfo}>Info</button>
                {info}
            </span>
        );
    }
}

export default GiphyElement;