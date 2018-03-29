/**
 * Component for any search like input text
*/

import React from 'react';

import {SearchFieldStyled, SearchFieldStyledContainer} from './SearchField.styled'

const SearchField = props => (
<SearchFieldStyledContainer>
    <SearchFieldStyled
        defaultValue={props.defaultValue}
        type={props.type}
        placeholder={props.placeholder}
        onChange={event => props.onChange(event)}
    />
</SearchFieldStyledContainer>
);

export default SearchField;