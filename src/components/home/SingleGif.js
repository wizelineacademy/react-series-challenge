/**
 * SingleGif Component
 */

 import React from 'react';

 const SingleGif = (props) => {
    return (
        <div className="SingleGif">
            <div style={{ 'width': '100%', 'height': '0', 'paddingBottom': '100%', 'position': 'relative' }}>
                <iframe src={props.url} width="100%" height="100%" 
                style={{ 'position': 'absolute' }} frameBorder="0" className="giphy-embed" allowFullScreen title={props.title}></iframe>
            </div>
        </div>
    );
}

export default SingleGif;