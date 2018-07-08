import React from 'react';
import Element from './Element';

const ElementList = (props) => {


    return (
        <div>
            <h3>Gifs</h3>
            {Object.keys(props.elements).map((element) => <Element key={element} element={props.elements[element]}/>)}
        </div>
    );
}


export default ElementList;