import React, { Component, Fragment, } from 'react';
import axios from 'axios';
import ComponentGif from './ComponentGif';

const API_URL = 'http://api.giphy.com/v1/gifs';
const API_KEY = "kWpyoml3LgBBvv0b03dvNxOSuNGXaRjl";
export default class ComponentHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.fetchGiphyTrending();
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: 10, }}>
                    <input type="text" placeholder="search" onKeyUp={this.onKeyUp} />
                </div>
                {this.renderLoader()}
                <Fragment>
                    {this.renderGifs()}
                </Fragment>
            </div>
        )
    }

    renderGifs = () => {
        return this.state.gifs.map((x, index) => ComponentGif(index, x.images.fixed_height_small_still));
    }

    renderLoader = () => {
        return (!this.state.loading ? null :
            <h4 className="text-center">Loading...</h4>
        );
    }

    onKeyUp = (e) => {
        if (e.keyCode == 13) {
            this.setState({ gifs: [], loading: true, });
            this.fetchGiphySearch(e.target.value);
        }
    }

    fetchGiphySearch = (filter) => {
        axios.get(`${API_URL}/search?q=${filter}&api_key=${API_KEY}`)
            .then((response) => {
                this.setState({ gifs: response.data.data, loading: false, });
            });
    }

    fetchGiphyTrending = () => {
        axios.get(`${API_URL}/trending?api_key=${API_KEY}`)
            .then((response) => {
                this.setState({ gifs: response.data.data, loading: false, });
            });
    }
}