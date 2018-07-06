/**
 * DisplayGifs Component
 */

import React, { Component, Fragment } from 'react';
import axios from 'axios';

import SingleGif from './SingleGif';

//import API Request Data
import API_DATA from '../../api';

export default class DisplayGifs extends Component {

    constructor(props){
        super(props);

        this.state = {
            gifs: {}
        }
    }

    componentDidMount(){
        this.sendGiphyRequest(API_DATA);
    }

    sendGiphyRequest = (data) => {
        const { API_KEY, URL } = data;
        
        axios({
            method: 'get',
            url: URL,
            params: {
                api_key: API_KEY
            }
        }).then( res => {
            this.setState( () => {
                return { gifs: res.data };
            } );
        } ).catch( err => {
            console.log(err);
        } );
    }

    renderSingleGif = () => {
        const gifs = this.state.gifs.data;
        if(!gifs){
            return;
        }

        let singleGif = gifs.map( (gif) => {
            const { embed_url, title, id } = gif;
            return <SingleGif url={embed_url} title={title} key={id} />;
        } );

        return singleGif;
    }

    render(){
        return (
            <section className="DisplayGifs">
                <Fragment>
                    {this.renderSingleGif()}
                </Fragment>
            </section>
        );
    }
}