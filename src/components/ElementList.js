import React from 'react';
import Element from './Element';

const ElementList = (props) => {
    console.log('test test :',props);
    const searchGifsLength = props.search ? Object.keys(props.search).length : 0;

    const renderGifs = () => {
        const gifs = searchGifsLength > 0 ? props.search : props.all;
        return  gifs ? Object.keys(gifs).map((gif) => <Element key={gif.id} gif={gifs[gif]}> x</Element>) : <h1>No info</h1>
    };

    return (
        <div>
            {renderGifs()}
        </div>
    );
}


export default ElementList;