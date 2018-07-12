import styled from 'styled-components'


const SearchLabel = styled.label`
    display: block;
    color: #333;
    text-align: right;
`;
SearchLabel.displayName = 'SearchLabel';

const SearchInput = styled.input`
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 1px solid #333;
    font-size: 14px;
    height: 25px;
    padding: 4px;
    
    &:focus {
        outline: none !important;
        border-color: #E93D44;
    }
`;

SearchInput.displayName = 'SearchInput';

export {
    SearchLabel,
    SearchInput,
};