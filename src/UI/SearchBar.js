import React from 'react';
import { StyledSearchbar, StyledInput, StyledButton } from './Searchbar.styled';

const SearchBar = (props) => {
    return (
        <StyledSearchbar>
            <StyledInput 
            type="text" 
            placeholder = "Search for awesome gifs" 
            onChange = {(event) => {props.updateState(event.target.value)}} />

            <StyledButton onClick = { props.handleSearch } />  
        </StyledSearchbar>
    );
}

export default SearchBar;