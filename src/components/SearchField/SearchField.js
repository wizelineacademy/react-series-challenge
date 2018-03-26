import React from 'react';

import {SearchFieldStyled, SearchFieldStyledContainer} from './SearchField.styled'

const SearchField = props => (
<SearchFieldStyledContainer>
    <SearchFieldStyled
        defaultValue={props.query}
        type={props.type}
        placeholder={props.placeholder}
        onChange={event => props.onChange(event)}
    />
</SearchFieldStyledContainer>
);

export default SearchField;