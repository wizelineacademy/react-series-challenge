import React from 'react';

const Element = ({onClick,text}) => (
    <li
        onClick={onClick}
    >
        {text}
    </li>
)
 export default Element;