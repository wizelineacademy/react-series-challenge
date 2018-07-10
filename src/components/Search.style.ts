import styled from 'styled-components';

export const SearchInput = styled.input.attrs({
    type: 'text',
    placeholder: "Search..."
})`
    width: 100%;
    padding: 6px;
    margin: 0 auto;
    box-shadow: none;
    color: #333;
    box-sizing: border-box;

    :focus {
        outline: none;
    }
`