import React from 'react';
import Element from './Element';

const ElementList = ({elements}) => (
    <ul>
        {elements.map(element =>
            <Element
                key={element.id}
                {...element}
            />
        )}
    </ul>
)

export default ElementList;